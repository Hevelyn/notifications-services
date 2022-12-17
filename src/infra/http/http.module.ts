import { SendNotification } from '@app/use-cases/send-notification';
import { Module } from '@nestjs/common';
import { NotificationsController } from './controllers/notifications.controller';
import { DataBaseModule } from '../database/database.module';

@Module({
    imports: [DataBaseModule],
    controllers: [NotificationsController],
    providers: [SendNotification],
})

export class HttpModule {}