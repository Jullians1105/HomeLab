import type { Request, Response } from "express";
import { notesService } from "../services/NotesService.js";
import { notFound } from "../utils/helpers.js";
import { isNonEmptyString, isValidNotePriority, isValidNoteStatus } from "../utils/validators.js";

export async function getAllNotes(_req: Request, res: Response): Promise<void> {
  res.json(await notesService.getAll());
}

export async function getNoteById(req: Request, res: Response): Promise<void> {
  const note = await notesService.getById(req.params.id);
  if (!note) return notFound(res, "Nota");
  res.json(note);
}

export async function getNotesByCategory(req: Request, res: Response): Promise<void> {
  res.json(await notesService.getByCategory(req.params.category));
}

export async function searchNotes(req: Request, res: Response): Promise<void> {
  const query = typeof req.query.q === "string" ? req.query.q : "";
  if (!isNonEmptyString(query)) {
    res.status(400).json({ error: "BadRequest", message: "El parámetro 'q' es requerido", statusCode: 400 });
    return;
  }
  res.json(await notesService.search(query));
}

export async function createNote(req: Request, res: Response): Promise<void> {
  const { titulo, categoria, status, prioridad, tags, pinned, archived, content } = req.body ?? {};

  if (!isNonEmptyString(titulo) || !isNonEmptyString(categoria)) {
    res.status(400).json({ error: "BadRequest", message: "'titulo' y 'categoria' son requeridos", statusCode: 400 });
    return;
  }

  const note = await notesService.create({
    titulo,
    categoria,
    status: isValidNoteStatus(status) ? status : "TODO",
    prioridad: isValidNotePriority(prioridad) ? prioridad : "Media",
    tags: Array.isArray(tags) ? tags : [],
    pinned: Boolean(pinned),
    archived: Boolean(archived),
    content,
  });

  res.status(201).json(note);
}

export async function updateNote(req: Request, res: Response): Promise<void> {
  const note = await notesService.update(req.params.id, req.body ?? {});
  if (!note) return notFound(res, "Nota");
  res.json(note);
}

export async function deleteNote(req: Request, res: Response): Promise<void> {
  const removed = await notesService.remove(req.params.id);
  if (!removed) return notFound(res, "Nota");
  res.status(204).send();
}
