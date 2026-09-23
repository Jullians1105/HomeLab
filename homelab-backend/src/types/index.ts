export * from "./notes.js";
export * from "./services.js";
export * from "./metrics.js";
export * from "./notifications.js";

export interface ApiError {
  error: string;
  message: string;
  statusCode: number;
}
