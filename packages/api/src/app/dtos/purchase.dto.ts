import { IsDateString, IsNumber, IsString } from "class-validator";


export class PurchaseDto {
    @IsDateString()
    date: Date;
    @IsString()
    name: string;
    @IsNumber()
    price: number;
}