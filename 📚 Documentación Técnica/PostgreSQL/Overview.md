---
id: "postgresql-overview"
titulo: "PostgreSQL — Overview"
categoria: "Documentación Técnica/PostgreSQL"
status: "TODO"
prioridad: "Media"
tags: ["#postgresql", "#basesdedatos"]
pinned: false
archived: false
created: "2026-09-22T14:00:00-05:00"
modified: "2026-09-22T14:00:00-05:00"
---

# PostgreSQL — Overview

Placeholder breve, listo para expandir cuando PostgreSQL esté instalado (VLAN 30 y 40, oct 2026).

Base de datos relacional planeada tanto para el backend del dashboard (Node + Express + TS, ver [[API Integration]]) como para los datos operativos de cada cliente en VLAN 30, y para uso personal en VLAN 40.

## Instancias planeadas

| Instancia | VLAN | Uso |
|---|---|---|
| PostgreSQL clientes | 30 | Datos de n8n, Metabase, y datos propios de cada cliente |
| PostgreSQL personal | 40 | Backend del dashboard, proyectos personales |

La pantalla "Bases PostgreSQL" del dashboard (ver [[05-PostgreSQL]]) está pensada para monitorear estas instancias una vez existan — hoy solo muestra datos mock.

## Pendiente de documentar tras instalación

- [ ] Versión instalada
- [ ] Esquema de bases por cliente (una DB por cliente vs schemas separados en una sola DB)
- [ ] Configuración de backups (`pg_dump` + integración con [[Backups Strategy]])
- [ ] Evaluar extensión `pgvector` si se necesita RAG para [[Ollama/Overview]]

## Relacionadas

- [[05-PostgreSQL]]
- [[API Endpoints]]
