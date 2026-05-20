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

    showWarning(text) {
        this._showNotification(NotificationType.WARNING, text)
    }

    showError(text) {
        this._showNotification(NotificationType.ERROR, text)
    }

    showSuccess(text) {
        this._showNotification(NotificationType.SUCCESS, text)
    }

    showInfo(text) {
        this._showNotification(NotificationType.INFO, text)
    }

    _showNotification(notificationType, text) {
        const notificationBox = document.createElement('li');
        const notification = new Notification(notificationBox, notificationType, text, this._defaultTime);
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

