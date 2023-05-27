import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PurchaseService } from './purchase/purchase.service';
import { PurchaseController } from './purchase/purchase.controller';

@Module({
  imports: [],
  controllers: [AppController, PurchaseService],
  providers: [AppService, PurchaseController],
})
export class AppModule {}
