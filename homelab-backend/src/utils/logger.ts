const LEVELS = ["debug", "info", "warn", "error"] as const;
type Level = (typeof LEVELS)[number];

const currentLevel = (process.env.LOG_LEVEL as Level) ?? "info";

function shouldLog(level: Level): boolean {
  return LEVELS.indexOf(level) >= LEVELS.indexOf(currentLevel);
}

function line(level: Level, message: string, meta?: unknown) {
  if (!shouldLog(level)) return;
  const timestamp = new Date().toISOString();
  const prefix = `[${timestamp}] [${level.toUpperCase()}]`;
  if (meta !== undefined) {
    console.log(prefix, message, meta);
  } else {
    console.log(prefix, message);
  }
}

export const logger = {
  debug: (message: string, meta?: unknown) => line("debug", message, meta),
  info: (message: string, meta?: unknown) => line("info", message, meta),
  warn: (message: string, meta?: unknown) => line("warn", message, meta),
  error: (message: string, meta?: unknown) => line("error", message, meta),
};
