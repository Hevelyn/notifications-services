import { PrismaNotificationMapper } from './../mappers/prisma-notification-mapper';
import { Injectable } from '@nestjs/common';
import { Notification } from '@app/entities/notification';
import { NotificationsRepository } from '@app/repositories/notifications-repository';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaNotificationsReposity implements NotificationsRepository {
    
    constructor(private prismaService: PrismaService){}
    
    async create(notification: Notification): Promise<void> {
        
        const persistenNotification = PrismaNotificationMapper.toPrisma(notification)
      
        await this.prismaService.notification.create({
            data: persistenNotification,
        })
    }
}