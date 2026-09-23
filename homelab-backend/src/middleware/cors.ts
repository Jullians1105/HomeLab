import cors from "cors";

const allowedOrigins = (process.env.CORS_ORIGIN ?? "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim());

export const corsMiddleware = cors({
  origin: allowedOrigins,
  credentials: true,
});
