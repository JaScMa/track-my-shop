import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { PurchaseDto } from '../dtos/purchase.dto';

@Injectable()
export class PurchaseService {
    constructor(
        private prisma: PrismaService
    ) { }
    
    createPurchase(data: PurchaseDto) {
        return this.prisma.createPurchase(data)
    }
    getAllPurchases() {
        return this.prisma.getAllPurchases()
    }
}
