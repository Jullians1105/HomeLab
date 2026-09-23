---
id: "proyecto-dashboard-admin"
titulo: "Dashboard Admin"
categoria: "Proyectos"
status: "In Progress"
prioridad: "Alta"
tags: ["#proyecto", "#frontend", "#dashboard"]
pinned: false
archived: false
created: "2026-09-22T14:00:00-05:00"
modified: "2026-09-22T14:00:00-05:00"
---

# Dashboard Admin

Este mismo repositorio (`HomeLab`). Dashboard administrativo para gestionar el homelab y, a futuro, dar visibilidad de AIWorkspace a nivel interno.

## Stack

- **Frontend**: React 19 + TypeScript + Vite + Tailwind CSS v4, React Router v7. Context API/Zustand y Axios/Chart.js/Recharts/Lucide React planeados pero no instalados aún.
- **Backend (futuro)**: Node 18 + Express + TS + PostgreSQL + Redis, integración con este vault de Obsidian vía `gray-matter` + `chokidar`.

## Las 6 pantallas

1. [[01-Visión General]] — Diseñada
2. [[02-Notas Privadas]] — Layout
3. [[03-Panel UX]] — Layout
4. [[04-Notificaciones]] — Layout
5. [[05-PostgreSQL]] — Layout
6. [[06-Almacenamiento]] — Layout

## Estado real (22 sep 2026)

Las 6 pantallas ya tienen un primer borrador de código funcionando con datos mock — más avanzado de lo que suele estar un proyecto en esta etapa temprana, pero todavía sin backend ni datos reales. Detalle exhaustivo, sin adornar, en [[Dashboard Frontend]] y [[Frontend Checklist]].

## Relacionadas

- [[Dashboard Frontend]]
- [[Frontend Checklist]]
- [[API Endpoints]]
- [[Deployment Plan]]
