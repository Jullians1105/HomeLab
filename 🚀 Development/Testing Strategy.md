---
id: "testing-strategy"
titulo: "Testing Strategy"
categoria: "Development"
status: "TODO"
prioridad: "Baja"
tags: ["#testing", "#frontend", "#backend"]
pinned: false
archived: false
created: "2026-09-22T14:00:00-05:00"
modified: "2026-09-22T14:00:00-05:00"
---

# Testing Strategy

## Estado actual

**No hay ningún framework de testing configurado.** `package.json` no incluye Vitest, Jest, React Testing Library ni Playwright. No existe ningún archivo `*.test.ts(x)` ni `*.spec.ts(x)` en el repo. Esto es consistente con la etapa temprana del proyecto (ver [[Frontend Checklist]]) pero es deuda técnica a resolver antes de conectar datos reales.

## Plan propuesto (sin implementar)

- [ ] **Unit/componentes**: Vitest + React Testing Library (elección natural dado que ya se usa Vite)
- [ ] **E2E**: evaluar Playwright una vez existan flujos reales de usuario (login, navegación entre las 6 pantallas)
- [ ] **Backend**: Vitest o Jest para el futuro backend Express (cuando exista, ver [[API Integration]])

## Prioridad sugerida al implementar

1. Componentes compartidos (`Card`, `MetricCard`, `StatusBadge`) — son los de mayor reutilización, ver [[Frontend Checklist]]
2. Lógica de parseo de frontmatter (`gray-matter`) del futuro backend, dado que alimenta directamente [[02-Notas Privadas]]
3. Rutas y navegación (`App.tsx`)

## Relacionadas

- [[Frontend Checklist]]
- [[Deployment Plan]]
- [[API Integration]]
