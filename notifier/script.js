import { Notification, NotificationType } from "./Notifier/notification.js";
import { notifier } from "./Notifier/notifier.js";


notifier.setDefaultTimeout(30000);
notifier.showWarning("Предупреждение");
notifier.showSuccess("Успешно");
notifier.showError("Ошибка");
notifier.showInfo("Информация");