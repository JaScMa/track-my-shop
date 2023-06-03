import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PurchaseComponent {}
