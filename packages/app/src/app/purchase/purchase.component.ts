import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PurchaseFacadeService } from '../data-access/purchase/purchase-facade.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PurchaseComponent {
  purchases$ = this.purchaseService.getPurchases();


  constructor(
    private purchaseService: PurchaseFacadeService,
  ){}
}
