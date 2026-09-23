---
id: "backups-strategy"
titulo: "Backups Strategy"
categoria: "Documentación Técnica/Homelab"
status: "TODO"
prioridad: "Alta"
tags: ["#backups", "#homelab", "#proxmox"]
pinned: false
archived: false
created: "2026-09-22T14:00:00-05:00"
modified: "2026-09-22T14:00:00-05:00"
---

# Backups Strategy

Sin implementar todavía — planeación previa a la instalación del hardware (29-30 sep 2026).

## Recurso dedicado

Seagate Exos 1TB, exclusivo para backups (`vzdump` de Proxmox).

## Plan propuesto (sin validar aún)

- [ ] Backups automáticos de todas las VMs/LXC vía `vzdump` (Proxmox Backup — evaluar si se justifica un Proxmox Backup Server separado o basta con `vzdump` directo al disco de 1TB)
- [ ] Frecuencia propuesta: diaria para VLAN 30 (datos de clientes — son el activo más crítico del negocio), semanal para VLAN 40 (personal)
- [ ] Retención propuesta: 7 backups diarios + 4 semanales (esquema GFS simplificado) — sin validar contra el espacio real disponible en 1TB
- [ ] Backup de workflows de n8n exportados como JSON (además del backup de la VM/LXC completa) — ver [[n8n Configuration]]
- [ ] Evaluar backup off-site (fuera de la red local) para datos de clientes — es el punto más débil del plan actual: todo el backup vive en el mismo homelab físico

## Riesgo conocido

Actualmente **no hay ningún backup off-site planeado**. Si el hardware físico falla (incendio, robo, falla de ambos discos), no hay recuperación posible. Pendiente evaluar una opción de backup en la nube (aunque sea solo para datos de clientes de [[AIWorkspace (Consultoría)]]) antes del MVP de noviembre.

## Relacionadas

- [[Proxmox Setup]]
- [[Arquitectura General]]
- [[Hardware Setup 29 Sep]]
