import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const obsidianConfig = {
  vaultPath: path.resolve(__dirname, "../../", process.env.OBSIDIAN_VAULT_PATH ?? ".."),
  watchEnabled: process.env.OBSIDIAN_WATCH_ENABLED === "true",
  mockMode: process.env.MOCK_MODE !== "false",
};
