import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PurchaseService } from './purchase/purchase.service';
import { PurchaseController } from './purchase/purchase.controller';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [AppController, PurchaseController],
  providers: [AppService, PurchaseService, PrismaService],
})
export class AppModule {}
