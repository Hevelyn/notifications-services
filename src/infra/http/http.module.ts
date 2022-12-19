import { SendNotification } from '@app/use-cases/send-notification/send-notification';
import { Module } from '@nestjs/common';
import { NotificationsController } from './controllers/notifications.controller';
import { DataBaseModule } from '../database/database.module';
import { CancelNotification } from '@app/use-cases/cancel-notification/cancel-notification';
import { ReadNotification } from '@app/use-cases/read-notification/read-notification';
import { CountRecipientNotification } from '@app/use-cases/count-recipient-notifications/count-recipient-notifications';
import { GetRecipientNotifications } from '@app/use-cases/get-recipient-notifications/get-recipient-notifications';
import { UnreadNotification } from '@app/use-cases/unread-notification copy/unread-notification';

@Module({
    imports: [DataBaseModule],
    controllers: [NotificationsController],
    providers: [
        SendNotification,
        CancelNotification,
        CountRecipientNotification,
        GetRecipientNotifications,
        ReadNotification,
        UnreadNotification
    ],
})

export class HttpModule {}