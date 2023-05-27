import { Injectable } from "@nestjs/common";
import { PrismaClient, Purchase } from "@prisma/client";

@Injectable()
export class PrismaService {
    prisma = new PrismaClient()

    createPurchase(data: Purchase) { 
        return this.prisma.purchase.create({data})
    }

    getAllPurchases() {
        return this.prisma.purchase.findMany()
    }
}