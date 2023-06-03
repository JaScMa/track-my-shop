import { Routes } from '@angular/router';
import { PurchaseComponent } from './purchase/purchase.component';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: NxWelcomeComponent,
    },
    {
        path: 'purchase',
        loadChildren: () => import('./purchase/purchase.module').then(m => m.PurchaseModule),
        pathMatch: 'full',
        component: PurchaseComponent,
    },
    {
        path: '**',
        redirectTo: '',
    },
];
