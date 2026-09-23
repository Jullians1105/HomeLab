import { Router } from "express";
import {
  createNote,
  deleteNote,
  getAllNotes,
  getNoteById,
  getNotesByCategory,
  searchNotes,
  updateNote,
} from "../controllers/notesController.js";
import { asyncHandler } from "../utils/helpers.js";

export const notesRouter = Router();

notesRouter.get("/search", asyncHandler(searchNotes));
notesRouter.get("/category/:category", asyncHandler(getNotesByCategory));
notesRouter.get("/:id", asyncHandler(getNoteById));
notesRouter.get("/", asyncHandler(getAllNotes));
notesRouter.post("/", asyncHandler(createNote));
notesRouter.put("/:id", asyncHandler(updateNote));
notesRouter.delete("/:id", asyncHandler(deleteNote));
