---
id: "deployment-plan"
titulo: "Deployment Plan"
categoria: "Development"
status: "TODO"
prioridad: "Media"
tags: ["#deployment", "#proxmox", "#frontend"]
pinned: false
archived: false
created: "2026-09-22T14:00:00-05:00"
modified: "2026-09-22T14:00:00-05:00"
---

# Deployment Plan

## Estado actual

Sin plan de despliegue implementado — no hay `Dockerfile`, `docker-compose.yml`, ni configuración de CI/CD (`.github/workflows/`) en el repo todavía. El proyecto hoy solo corre en local vía `npm run dev` (Vite dev server).

## Plan propuesto (alto nivel, pendiente de validar)

1. **Build**: `npm run build` (`tsc -b && vite build`) genera el bundle estático en `dist/`
2. **Hosting**: servir `dist/` desde un contenedor Nginx (LXC en VLAN 20, detrás de Nginx Proxy Manager) — coherente con la arquitectura descrita en [[Arquitectura General]]
3. **Backend**: cuando exista (ver [[API Integration]]), desplegar como LXC/Docker separado en VLAN 30, con el frontend haciendo proxy de `/api/*` hacia él
4. **CI/CD**: evaluar GitHub Actions para build + lint (`oxlint`) automático en cada PR a `development` (ver [[Git Strategy]]) — no configurado aún

## Dependencias de este plan

- Requiere que exista Proxmox instalado y VLAN 20/30 configuradas (ver [[Proxmox Installation]], [[VLAN Configuration]]) — sin esto, no hay dónde desplegar
- Requiere que el backend exista (ver [[API Integration]]) antes de que el despliegue tenga sentido más allá de servir contenido estático mock

## Relacionadas

- [[Arquitectura General]]
- [[Testing Strategy]]
- [[Git Strategy]]
