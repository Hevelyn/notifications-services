import { OnModuleDestroy } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['smiling-crawdad-7156-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'c21pbGluZy1jcmF3ZGFkLTcxNTYkFgXuVjabeEK_ZpXDyc36MhFfOZ_ejpwNCog',
          password:
            'GLVAKWwJNuKiQHnLsj0d_unhbiDK-b_2xn666syaLIJtX8p7ga_JylYPPDKWYvzKtquDOQ==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
