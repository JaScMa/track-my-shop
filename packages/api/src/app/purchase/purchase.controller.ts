import { Body, Controller, Get, Post } from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { PurchaseDto } from '../dtos/purchase.dto';

@Controller('purchase')
export class PurchaseController {
    @Get()
    allPurchase() {
        return this.purchaseService.getAllPurchases()
    }

    @Post()
    createPurchase(@Body() data: PurchaseDto) {
        return this.purchaseService.createPurchase(data)
    }

    constructor(
        private purchaseService: PurchaseService    ) { }
}
