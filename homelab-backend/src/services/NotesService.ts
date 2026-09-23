import { redis } from "../config/redis.js";
import { obsidianService } from "./ObsidianService.js";
import type { Note } from "../types/index.js";

const CACHE_KEY = "notes:all";
const CACHE_TTL_SECONDS = 60;

export class NotesService {
  async getAll(): Promise<Note[]> {
    const cached = await this.readCache();
    if (cached) return cached;

    const notes = (await obsidianService.getAllNotes()).map((n) => n.toJSON());
    await this.writeCache(notes);
    return notes;
  }

  async getById(id: string): Promise<Note | undefined> {
    const note = await obsidianService.getNoteById(id);
    return note?.toJSON();
  }

  async getByCategory(category: string): Promise<Note[]> {
    const notes = await obsidianService.getNotesByCategory(category);
    return notes.map((n) => n.toJSON());
  }

  async search(query: string): Promise<Note[]> {
    const notes = await obsidianService.searchNotes(query);
    return notes.map((n) => n.toJSON());
  }

  async create(input: Omit<Note, "id" | "created" | "modified" | "caracteres">): Promise<Note> {
    const note = await obsidianService.createNote(input);
    await this.invalidateCache();
    return note.toJSON();
  }

  async update(id: string, patch: Partial<Note>): Promise<Note | undefined> {
    const note = await obsidianService.updateNote(id, patch);
    await this.invalidateCache();
    return note?.toJSON();
  }

  async remove(id: string): Promise<boolean> {
    const removed = await obsidianService.deleteNote(id);
    await this.invalidateCache();
    return removed;
  }

  private async readCache(): Promise<Note[] | null> {
    try {
      const raw = await redis.get(CACHE_KEY);
      return raw ? (JSON.parse(raw) as Note[]) : null;
    } catch {
      return null;
    }
  }

  private async writeCache(notes: Note[]): Promise<void> {
    try {
      await redis.set(CACHE_KEY, JSON.stringify(notes), "EX", CACHE_TTL_SECONDS);
    } catch {
      // Redis no disponible — se sirve sin cache
    }
  }

  private async invalidateCache(): Promise<void> {
    try {
      await redis.del(CACHE_KEY);
    } catch {
      // Redis no disponible — nada que invalidar
    }
  }
}

export const notesService = new NotesService();
