import { randomUUID } from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { obsidianConfig } from "../config/obsidian.js";
import mockNotes from "../data/mockNotes.json" with { type: "json" };
import { Note } from "../models/Note.js";
import type { Note as NoteData } from "../types/index.js";

export class ObsidianService {
  private mockStore: NoteData[] = structuredClone(mockNotes) as NoteData[];

  async getAllNotes(): Promise<Note[]> {
    if (obsidianConfig.mockMode) {
      return this.mockStore.map((n) => new Note(n));
    }
    return this.readVaultNotes();
  }

  async getNoteById(id: string): Promise<Note | undefined> {
    const notes = await this.getAllNotes();
    return notes.find((n) => n.id === id);
  }

  async getNotesByCategory(category: string): Promise<Note[]> {
    const notes = await this.getAllNotes();
    return notes.filter((n) => n.toJSON().categoria.toLowerCase() === category.toLowerCase());
  }

  async searchNotes(query: string): Promise<Note[]> {
    const notes = await this.getAllNotes();
    return notes.filter((n) => n.matches(query));
  }

  async createNote(input: Omit<NoteData, "id" | "created" | "modified" | "caracteres">): Promise<Note> {
    const now = new Date().toISOString();
    const note: NoteData = {
      ...input,
      id: randomUUID(),
      created: now,
      modified: now,
      caracteres: input.content?.length ?? 0,
    };
    this.mockStore.push(note);
    return new Note(note);
  }

  async updateNote(id: string, patch: Partial<NoteData>): Promise<Note | undefined> {
    const index = this.mockStore.findIndex((n) => n.id === id);
    if (index === -1) return undefined;
    this.mockStore[index] = { ...this.mockStore[index], ...patch, modified: new Date().toISOString() };
    return new Note(this.mockStore[index]);
  }

  async deleteNote(id: string): Promise<boolean> {
    const index = this.mockStore.findIndex((n) => n.id === id);
    if (index === -1) return false;
    this.mockStore.splice(index, 1);
    return true;
  }

  async watchVault(): Promise<void> {
    console.log(
      `[obsidian] watch solicitado para ${obsidianConfig.vaultPath} (implementación con chokidar pendiente — ver [[API Integration]])`,
    );
  }

  private async readVaultNotes(): Promise<Note[]> {
    const entries = await fs.readdir(obsidianConfig.vaultPath, { withFileTypes: true, recursive: true });
    const notes: Note[] = [];

    for (const entry of entries) {
      if (!entry.isFile() || !entry.name.endsWith(".md")) continue;
      const fullPath = path.join(entry.parentPath ?? obsidianConfig.vaultPath, entry.name);
      const raw = await fs.readFile(fullPath, "utf-8");
      const { data, content } = matter(raw);
      notes.push(Note.fromFrontmatter(path.basename(entry.name, ".md"), data, content));
    }

    return notes;
  }
}

export const obsidianService = new ObsidianService();
