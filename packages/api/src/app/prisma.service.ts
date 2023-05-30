import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { PurchaseDto } from "./dtos/purchase.dto";

@Injectable()
export class PrismaService {
    prisma = new PrismaClient()

    createPurchase(data: PurchaseDto) { 
        return this.prisma.purchase.create({data})
    }

    getAllPurchases() {
        return this.prisma.purchase.findMany()
    }
}