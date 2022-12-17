"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DataBaseModule = void 0;
var prisma_notifications_repository_1 = require("./prisma/repositories/prisma-notifications-repository");
var prisma_service_1 = require("./prisma/prisma.service");
var common_1 = require("@nestjs/common");
var notifications_repository_1 = require("../../../../../../../../src/app/repositories/notifications-repository");
var DataBaseModule = /** @class */ (function () {
    function DataBaseModule() {
    }
    DataBaseModule = __decorate([
        (0, common_1.Module)({
            providers: [
                prisma_service_1.PrismaService,
                {
                    provide: notifications_repository_1.NotificationsRepository,
                    useClass: prisma_notifications_repository_1.PrismaNotificationsReposity
                }
            ],
            exports: [
                notifications_repository_1.NotificationsRepository
            ]
        })
    ], DataBaseModule);
    return DataBaseModule;
}());
exports.DataBaseModule = DataBaseModule;
