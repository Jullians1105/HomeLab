import type { Note as NoteData } from "../types/index.js";

export class Note {
  constructor(private data: NoteData) {}

  get id() {
    return this.data.id;
  }

  toJSON(): NoteData {
    return this.data;
  }

  matches(query: string): boolean {
    const q = query.toLowerCase();
    return (
      this.data.titulo.toLowerCase().includes(q) ||
      this.data.tags.some((tag) => tag.toLowerCase().includes(q)) ||
      (this.data.content?.toLowerCase().includes(q) ?? false)
    );
  }

  static fromFrontmatter(id: string, frontmatter: Record<string, unknown>, content: string): Note {
    return new Note({
      id,
      titulo: String(frontmatter.titulo ?? id),
      categoria: String(frontmatter.categoria ?? "Sin categoría"),
      status: (frontmatter.status as NoteData["status"]) ?? "TODO",
      prioridad: (frontmatter.prioridad as NoteData["prioridad"]) ?? "Media",
      tags: Array.isArray(frontmatter.tags) ? (frontmatter.tags as string[]) : [],
      pinned: Boolean(frontmatter.pinned),
      archived: Boolean(frontmatter.archived),
      caracteres: content.length,
      created: String(frontmatter.created ?? new Date().toISOString()),
      modified: String(frontmatter.modified ?? new Date().toISOString()),
      content,
    });
  }
}
