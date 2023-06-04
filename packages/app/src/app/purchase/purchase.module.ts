import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseComponent } from './purchase.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [PurchaseComponent],
  imports: [
    CommonModule,
    MatTableModule,
  ],
})
export class PurchaseModule {}
