import { Injectable } from '@angular/core';
import { PruchaseApiService } from './pruchase-api.service';

@Injectable({
  providedIn: 'root'
})
export class PurchaseFacadeService {

  getPurchases() {
    return this.purchaseService.getPurchases();
  }

  constructor(
    private purchaseService: PruchaseApiService,
  ) { }
}
