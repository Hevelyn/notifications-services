import { PrismaNotificationsReposity } from './prisma/repositories/prisma-notifications-repository';
import { PrismaService } from './prisma/prisma.service';
import { Module } from '@nestjs/common';
import { NotificationsRepository } from 'src/app/repositories/notifications-repository';

@Module({
    providers: [
        PrismaService,
        {
            provide: NotificationsRepository,
            useClass: PrismaNotificationsReposity
        }
    ],
    exports: [
        NotificationsRepository
    ]
})

export class DataBaseModule {}