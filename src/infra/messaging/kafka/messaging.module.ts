import { SendNotification } from '@app/use-cases/send-notification/send-notification';
import { DataBaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { NotificationsController } from './controllers/notificatoins.controllers';
import { KafkaConsumerService } from './kafka-consumer.service';

@Module({
  imports: [DataBaseModule],
  providers: [KafkaConsumerService, SendNotification],
  controllers: [NotificationsController],
})
export class MessagingModule {}
