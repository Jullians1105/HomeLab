import { Router } from "express";
import { getAllNotifications } from "../controllers/notificationsController.js";

export const notificationsRouter = Router();

notificationsRouter.get("/", getAllNotifications);
