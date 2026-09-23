import "dotenv/config";
import express from "express";
import { obsidianConfig } from "./config/obsidian.js";
import { corsMiddleware } from "./middleware/cors.js";
import { errorHandler, notFoundHandler } from "./middleware/errorHandler.js";
import { requestLogger } from "./middleware/logging.js";
import { databasesRouter } from "./routes/databases.routes.js";
import { healthRouter } from "./routes/health.routes.js";
import { metricsRouter } from "./routes/metrics.routes.js";
import { notesRouter } from "./routes/notes.routes.js";
import { notificationsRouter } from "./routes/notifications.routes.js";
import { servicesRouter } from "./routes/services.routes.js";
import { storageRouter } from "./routes/storage.routes.js";
import { workflowsRouter } from "./routes/workflows.routes.js";
import { logger } from "./utils/logger.js";

const app = express();
const PORT = Number(process.env.PORT ?? 3001);
const API_PREFIX = process.env.API_PREFIX ?? "/api";

app.use(corsMiddleware);
app.use(express.json());
app.use(requestLogger);

app.use(healthRouter);
app.use(`${API_PREFIX}/notes`, notesRouter);
app.use(`${API_PREFIX}/services`, servicesRouter);
app.use(`${API_PREFIX}/metrics`, metricsRouter);
app.use(`${API_PREFIX}/storage`, storageRouter);
app.use(`${API_PREFIX}/databases`, databasesRouter);
app.use(`${API_PREFIX}/workflows`, workflowsRouter);
app.use(`${API_PREFIX}/notifications`, notificationsRouter);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  logger.info(`homelab-backend escuchando en http://localhost:${PORT}`);
  logger.info(`MOCK_MODE=${obsidianConfig.mockMode} — todos los endpoints sirven desde src/data/*.json`);
});
