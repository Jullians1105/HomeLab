# Homelab Backend

API para el [Homelab Dashboard](../README.md). Corre en **modo mock** por defecto: todos los endpoints sirven datos desde `src/data/*.json`, sin depender de Postgres, Redis ni infraestructura real.

## Quick start

```bash
npm install
cp .env.example .env
npm run dev
```

El servidor queda en `http://localhost:3001`. Prueba con:

```bash
curl http://localhost:3001/health
curl http://localhost:3001/api/notes
curl http://localhost:3001/api/services
```

## Con Docker (Postgres + Redis reales)

```bash
bash scripts/setup.sh   # install + .env + docker up + seed
npm run dev
```

Mientras `MOCK_MODE=true` (default en `.env.example`), Postgres/Redis son opcionales — el servidor arranca y responde igual sin ellos, solo se pierde el cache de notas en Redis.

## Endpoints

| Recurso | Rutas |
|---|---|
| Notas (Obsidian) | `GET/POST /api/notes`, `GET/PUT/DELETE /api/notes/:id`, `GET /api/notes/category/:cat`, `GET /api/notes/search?q=` |
| Servicios | `GET /api/services`, `GET /api/services/:name`, `POST /api/services/:name/restart` |
| Métricas | `GET /api/metrics`, `/cpu`, `/ram`, `/storage`, `/bandwidth`, `/history?range=24h\|7d\|30d` |
| Almacenamiento | `GET /api/storage`, `/disks`, `/breakdown`, `/prediction`, `/large-files` |
| Bases de datos | `GET /api/databases`, `/:name`, `/connections`, `/queries`, `/queries-slow`, `/backups` |
| Workflows | `GET /api/workflows`, `/:id` |
| Notificaciones | `GET /api/notifications?severity=` |
| Salud | `GET /health`, `GET /status` |

## Estructura

```
src/
├── main.ts          Punto de entrada (Express app + rutas)
├── config/           Postgres, Redis, Obsidian vault path
├── routes/           Un router por dominio
├── controllers/      Validación de entrada + llamada al service
├── services/         Lógica de negocio, hoy leyendo src/data/*.json
├── models/           Clases de dominio (Note, Service, Metric, Notification)
├── types/            Interfaces TypeScript compartidas
├── middleware/        CORS, logging, manejo de errores
├── utils/             Logger, validadores, helpers de Express
└── data/              Mock JSON — fuente de verdad mientras MOCK_MODE=true
```

## Nota sobre datos de clientes

Los endpoints de clientes/tenants (`/api/clients`) **no están implementados todavía** — se removieron intencionalmente porque aún no hay clientes confirmados para el proyecto. `workflows` no lleva atribución a ningún cliente por ahora. Cuando haya datos reales, se puede reintroducir el dominio `Client` (ver `git log` de esta rama para la versión que se quitó).

## Conectar a infraestructura real

1. Apaga `MOCK_MODE` en `.env`.
2. Cada `*Service.ts` en `src/services/` es el único lugar que hoy importa un `mockX.json` — reemplaza esa importación por la llamada real (Prometheus, `pg`, Proxmox API, etc.) sin tocar controllers ni rutas.
3. `ObsidianService` ya sabe leer el vault real con `gray-matter` cuando `MOCK_MODE=false` (busca `.md` en `OBSIDIAN_VAULT_PATH`, que por defecto apunta a la raíz de este repo).
