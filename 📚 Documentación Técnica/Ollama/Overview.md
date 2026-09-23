---
id: "ollama-overview"
titulo: "Ollama — Overview"
categoria: "Documentación Técnica/Ollama"
status: "TODO"
prioridad: "Media"
tags: ["#ollama", "#ia", "#rag"]
pinned: false
archived: false
created: "2026-09-22T14:00:00-05:00"
modified: "2026-09-22T14:00:00-05:00"
---

# Ollama — Overview

Placeholder breve, listo para expandir cuando Ollama esté instalado (VLAN 30/40, oct 2026).

Ollama corre modelos LLM localmente. En VLAN 30 sirve como base del chatbot IA con RAG para clientes de [[AIWorkspace (Consultoría)]]; en VLAN 40 se usa para desarrollo/uso personal.

## Consideración de hardware

El host (Lenovo ThinkCentre M900 Tiny, i7-6700T, sin GPU dedicada) no tiene aceleración por GPU — Ollama correrá sobre CPU. Esto limita el tamaño de modelo viable en producción; pendiente hacer pruebas de rendimiento reales tras la instalación antes de prometer tiempos de respuesta a clientes.

## Uso previsto

- Chatbot IA con RAG sobre documentos/datos de cada cliente (Open WebUI como interfaz)
- Integrado con n8n para flujos que requieran generación de texto/resúmenes

## Pendiente de documentar tras instalación

- [ ] Modelo(s) elegido(s) y su tamaño (params) viable en CPU
- [ ] Estrategia de RAG (vector DB — evaluar si se agrega pgvector sobre la PostgreSQL existente)
- [ ] Tiempos de respuesta reales medidos

## Relacionadas

- [[PostgreSQL/Overview]]
- [[AIWorkspace (Consultoría)]]
