// TODO: панелька с уведомлениями 
import {Notification, NotificationType} from "./notification.js"


export class Notifier {
    constructor(element, defaultTime) {
        this._element = element;
        this._defaultTime = defaultTime;
    }
    setDefaultTimeout(ms) {
        this._defaultTime = ms;
    }

    showWarning(text, timeoutMs = null) {
        this._showNotification(NotificationType.WARNING, text, timeoutMs)
    }

    showError(text, timeoutMs = null) {
        this._showNotification(NotificationType.ERROR, text, timeoutMs)
    }

    showSuccess(text, timeoutMs = null) {
        this._showNotification(NotificationType.SUCCESS, text, timeoutMs)
    }

    showInfo(text, timeoutMs = null) {
        this._showNotification(NotificationType.INFO, text, timeoutMs)
    }

    _showNotification(notificationType, text, timeoutMs = null) {
        const notificationBox = document.createElement('li');
        const notification = new Notification(notificationBox, notificationType, text, timeoutMs ?? this._defaultTime);
        notification.initElement();
        this._element.appendChild(notificationBox)
    }
}

function createNotifierAttached() {
    const notifierBox = document.createElement('ul');
    notifierBox.className = 'Notifier';
    document.body.appendChild(notifierBox);
    return new Notifier(notifierBox);
}



export const notifier = createNotifierAttached()

