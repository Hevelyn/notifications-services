import { Module } from '@nestjs/common';
import { HttpModule } from './infra/http/http.module';
import { DataBaseModule } from './infra/database/database.module';
import { MessagingModule } from '@infra/messaging/kafka/messaging.module';

@Module({
  imports: [
    HttpModule, 
    DataBaseModule, 
    MessagingModule
  ],
})

export class AppModule {}