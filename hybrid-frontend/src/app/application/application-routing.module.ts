import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationComponent } from './components/application/application.component';
import { roleAccessGuard } from '../shared/guards/role-access.guard';

const routes: Routes = [
  {
    path: '',
    component: ApplicationComponent,
    children: [
      {
        path: 'seller',
        canActivate: [roleAccessGuard],
        loadChildren: () =>
          import('./modules/seller/seller.module').then((m) => m.SellerModule),
      },
      {
        path: 'browse',
        canActivate: [roleAccessGuard],
        loadChildren: () =>
          import('./modules/buyer/buyer.module').then((m) => m.BuyerModule),
      },
      {
        path: 'cart',
        canActivate: [roleAccessGuard],
        loadChildren: () =>
          import('./modules/cart/cart.module').then((m) => m.CartModule),
      },
      {
        path: 'checkout',
        canActivate: [roleAccessGuard],
        loadChildren: () =>
          import('./modules/checkout/checkout.module').then(
            (m) => m.CheckoutModule
          ),
      },
      {
        path: 'orders',
        canActivate: [roleAccessGuard],
        loadChildren: () =>
          import('./modules/order/order.module').then((m) => m.OrderModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicationRoutingModule {}
