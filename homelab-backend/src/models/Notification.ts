import type { Notification as NotificationData } from "../types/index.js";

export class Notification {
  constructor(private data: NotificationData) {}

  toJSON(): NotificationData {
    return this.data;
  }

  get isActionable(): boolean {
    return this.data.severity === "critica" || this.data.severity === "advertencia";
  }
}
