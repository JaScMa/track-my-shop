import { Body, Controller, Get, Post } from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { Purchase } from '@prisma/client';

@Controller('purchase')
export class PurchaseController {
    @Get()
    allPurchase() {
        return this.purchaseService.getAllPurchases()
    }

    @Post()
    createPurchase(@Body() data: Purchase) {
        return this.purchaseService.createPurchase(data)
    }

    constructor(
        private purchaseService: PurchaseService
    ) { }
}
