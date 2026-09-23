---
id: "n8n-configuration"
titulo: "n8n Configuration"
categoria: "Notas Privadas/Urgentes"
status: "TODO"
prioridad: "Alta"
tags: ["#n8n", "#automatizacion", "#urgente"]
pinned: false
archived: false
created: "2026-09-22T14:00:00-05:00"
modified: "2026-09-22T14:00:00-05:00"
---

# n8n Configuration

Pendiente hasta que exista infraestructura (VLAN 30 en Proxmox, oct 2026). Esta nota es un placeholder de planeación para no llegar a ciegas a la instalación.

## Contexto de negocio

n8n es el motor de automatización de workflows para AIWorkspace — ver [[AIWorkspace (Consultoría)]]. Los 3 clientes actuales necesitarán workflows propios:

- [[Transportes Elite SAS]]
- [[EQUIPXA SAS]]
- [[Estación de Servicios La Isla SAS]]

## Configuración planeada (pendiente de validar en instalación real)

- [ ] Desplegar en VLAN 30 (Empresa/Clientes), no en VLAN 40 (personal)
- [ ] Base de datos: PostgreSQL dedicada (no SQLite) — ver [[PostgreSQL/Overview]]
- [ ] Definir estrategia de credenciales por cliente (workspace/carpetas separadas vs instancia por cliente — evaluar según licenciamiento de n8n)
- [ ] Webhooks expuestos solo internamente hasta definir reverse proxy (Nginx Proxy Manager, VLAN 20)
- [ ] Backup de workflows vía export JSON + `vzdump` del volumen — ver [[Backups Strategy]]

## Workflows de ejemplo (ver [[Workflows/Índice]])

- [[Sync Facturación Diaria]]
- [[Backup Diario Automatizado]]

## Relacionadas

- [[Docker Compose]]
- [[Proxmox Installation]]
- [[n8n/Overview]]
