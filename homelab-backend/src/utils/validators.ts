import type { NotePriority, NoteStatus } from "../types/index.js";

const NOTE_STATUSES: NoteStatus[] = ["TODO", "In Progress", "Done"];
const NOTE_PRIORITIES: NotePriority[] = ["Alta", "Media", "Baja"];

export function isValidNoteStatus(value: unknown): value is NoteStatus {
  return typeof value === "string" && (NOTE_STATUSES as string[]).includes(value);
}

export function isValidNotePriority(value: unknown): value is NotePriority {
  return typeof value === "string" && (NOTE_PRIORITIES as string[]).includes(value);
}

export function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export function isValidMetricRange(value: unknown): value is "24h" | "7d" | "30d" {
  return value === "24h" || value === "7d" || value === "30d";
}
