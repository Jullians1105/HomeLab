import { Router } from "express";
import { getAllServices, getServiceByName, restartService } from "../controllers/servicesController.js";

export const servicesRouter = Router();

servicesRouter.get("/", getAllServices);
servicesRouter.get("/:name", getServiceByName);
servicesRouter.post("/:name/restart", restartService);
