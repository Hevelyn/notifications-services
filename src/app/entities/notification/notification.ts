import { randomUUID } from 'crypto';
import { Replace } from '@helpers/Replace';
import { Content } from '../content/content';

export interface NotificationProps {
    recipientId: string;
    content: Content;
    category: string;
    readAt?: Date | null;
    canceledAt?: Date | null;
    createdAt: Date;
}

export class Notification {
    private _id: string;
    private propos: NotificationProps;

    constructor(props: Replace<NotificationProps, {createdAt?: Date}>, id?: string) {
        this._id = id ?? randomUUID();
        this.propos = {
            ...props,
            createdAt: props.createdAt ?? new Date(),
        };
    }

    public get id(){
        return this._id;
    }

    public set recipientId(recipientId: string){
        this.propos.recipientId = recipientId;
    }

    public get recipientId(): string {
        return this.propos.recipientId
    }

    public set content(content: Content){
        this.propos.content = content;
    }

    public get content(): Content {
        return this.propos.content
    }

    public set category(category: string){
        this.propos.category = category;
    }


    public get category(): string {
        return this.propos.category
    }
  
    public read(){
        this.propos.readAt = new Date();
    }

    public unread(){
        this.propos.readAt = null;
    }

    public get readAt(): Date | null | undefined {
        return this.propos.readAt
    }

    public cancel(){
        this.propos.canceledAt = new Date();
    }

    public get canceledAt(): Date | null | undefined {
        return this.propos.canceledAt
    }

    public get createdAt(): Date {
        return this.propos.createdAt
    }
}