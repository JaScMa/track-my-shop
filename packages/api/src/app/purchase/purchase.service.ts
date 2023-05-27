import { Injectable } from '@nestjs/common';
import { Purchase } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PurchaseService {
    constructor(
        private prisma: PrismaService
    ) { }
    
    createPurchase(data: Purchase) {
        return this.prisma.createPurchase( data)
    }
    getAllPurchases() {
        return this.prisma.getAllPurchases()
    }
}
