import mockNotifications from "../data/mockNotifications.json" with { type: "json" };
import { Notification } from "../models/Notification.js";
import type { Notification as NotificationData, NotificationSeverity } from "../types/index.js";

export class NotificationsService {
  getAll(): Notification[] {
    return (mockNotifications as NotificationData[]).map((n) => new Notification(n));
  }

  getBySeverity(severity: NotificationSeverity): Notification[] {
    return this.getAll().filter((n) => n.toJSON().severity === severity);
  }
}

export const notificationsService = new NotificationsService();
