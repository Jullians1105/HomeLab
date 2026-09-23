import "dotenv/config";
import { pool } from "../src/config/database.js";
import mockNotes from "../src/data/mockNotes.json" with { type: "json" };
import mockServices from "../src/data/mockServices.json" with { type: "json" };
import mockWorkflows from "../src/data/mockWorkflows.json" with { type: "json" };

async function seed() {
  console.log("🌱 Seeding homelab_dev...");

  await pool.query(`
    CREATE TABLE IF NOT EXISTS notes (
      id TEXT PRIMARY KEY,
      titulo TEXT NOT NULL,
      categoria TEXT NOT NULL,
      status TEXT NOT NULL,
      prioridad TEXT NOT NULL,
      tags TEXT[] NOT NULL DEFAULT '{}',
      pinned BOOLEAN NOT NULL DEFAULT false,
      archived BOOLEAN NOT NULL DEFAULT false,
      caracteres INTEGER NOT NULL DEFAULT 0,
      created TIMESTAMPTZ NOT NULL,
      modified TIMESTAMPTZ NOT NULL
    );

    CREATE TABLE IF NOT EXISTS services (
      name TEXT PRIMARY KEY,
      status TEXT NOT NULL,
      uptime TEXT NOT NULL,
      cpu INTEGER NOT NULL,
      ram INTEGER NOT NULL,
      disk INTEGER NOT NULL,
      last_check TIMESTAMPTZ NOT NULL
    );

    CREATE TABLE IF NOT EXISTS workflows (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      status TEXT NOT NULL,
      progress INTEGER NOT NULL,
      start_time TIMESTAMPTZ NOT NULL,
      estimated_end TIMESTAMPTZ NOT NULL
    );
  `);

  await pool.query("TRUNCATE notes, services, workflows");

  for (const note of mockNotes) {
    await pool.query(
      `INSERT INTO notes (id, titulo, categoria, status, prioridad, tags, pinned, archived, caracteres, created, modified)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
      [
        note.id,
        note.titulo,
        note.categoria,
        note.status,
        note.prioridad,
        note.tags,
        note.pinned,
        note.archived,
        note.caracteres,
        note.created,
        note.modified,
      ],
    );
  }

  for (const service of mockServices) {
    await pool.query(
      `INSERT INTO services (name, status, uptime, cpu, ram, disk, last_check)
       VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [service.name, service.status, service.uptime, service.cpu, service.ram, service.disk, service.lastCheck],
    );
  }

  for (const workflow of mockWorkflows) {
    await pool.query(
      `INSERT INTO workflows (id, name, status, progress, start_time, estimated_end)
       VALUES ($1, $2, $3, $4, $5, $6)`,
      [workflow.id, workflow.name, workflow.status, workflow.progress, workflow.startTime, workflow.estimatedEnd],
    );
  }

  console.log(`✅ Seed completo: ${mockNotes.length} notas, ${mockServices.length} servicios, ${mockWorkflows.length} workflows`);
  await pool.end();
}

seed().catch((err) => {
  console.error("❌ Error en seed:", err);
  process.exit(1);
});
