---
id: "spec-01-vision-general"
titulo: "01 — Visión General"
categoria: "Dashboard Specs"
status: "Done"
prioridad: "Alta"
tags: ["#dashboard", "#spec", "#diseñada"]
pinned: false
archived: false
created: "2026-09-22T14:00:00-05:00"
modified: "2026-09-22T14:00:00-05:00"
---

# 01 — Visión General

**Estado de diseño**: Diseñada (Done). Implementada en código en `src/pages/Overview.tsx` con datos mock — ver estado real de implementación en [[Dashboard Frontend]].

## Header

- Título: "📊 Dashboard Administrativo"
- Subtítulo: "Homelab | Infraestructura en Tiempo Real"

## Banner de alertas

Banner descartable en la parte superior para alertas activas (ej. "Ollama: Alto uso de memoria RAM (92%)"), con acción rápida ("Optimizar memoria") y botón de cerrar.

## 4 métricas en tiempo real

Tarjetas de métrica (`MetricCard`) con valor, porcentaje, delta (subida/bajada) y footer con contexto:

1. CPU Usage — % de uso, núcleos/frecuencia
2. (RAM, Disco y Red — mismo patrón que CPU, completar valores reales tras instalación de Proxmox)

Cada métrica: valor actual, % de uso, delta vs. periodo anterior, footer izquierdo (detalle técnico) y footer derecho (estado del cluster).

## Gráfico CPU 24h

Gráfico de línea (SVG hecho a mano, componente `CpuChart`) mostrando uso de CPU en las últimas 24h, con selector de rango 24H / 7D / 30D.

## 5 tarjetas de servicios

`ServiceStatCard` por servicio corriendo en el homelab — nombre, host, estado (online/warning/offline), CPU, RAM.

## 3 clientes (tenants)

Tarjetas resumidas de los 3 clientes actuales de [[AIWorkspace (Consultoría)]]: iniciales, nombre, número de workflows activos, estado, uptime. Ver [[Transportes Elite SAS]], [[EQUIPXA SAS]], [[Estación de Servicios La Isla SAS]].

## 3 workflows en ejecución

Lista de workflows n8n corriendo actualmente con ícono, progreso y detalle. Ver ejemplos en [[Workflows/Índice]].

## 4 KPIs mensuales

Tarjetas de indicadores del mes (ej. ejecuciones totales, tasa de éxito, ahorro estimado, clientes activos) con footer de contexto.

## Relacionadas

- [[Dashboard Frontend]]
- [[Frontend Checklist]]
- [[Color Palette & Typography]]
