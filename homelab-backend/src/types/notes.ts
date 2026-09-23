export type NoteStatus = "TODO" | "In Progress" | "Done";
export type NotePriority = "Alta" | "Media" | "Baja";

export interface Note {
  id: string;
  titulo: string;
  categoria: string;
  status: NoteStatus;
  prioridad: NotePriority;
  tags: string[];
  pinned: boolean;
  archived: boolean;
  caracteres: number;
  created: string;
  modified: string;
  content?: string;
}
