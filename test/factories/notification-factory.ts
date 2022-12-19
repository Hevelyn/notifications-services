import { Content } from "@app/entities/content/content";
import { Notification, NotificationProps } from "@app/entities/notification/notification";

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
 return new Notification({
    category: 'social',
    content: new Content('Nova soclicitação de amizade!'),
    recipientId: 'recipient-2',
    ...override,
  });
}