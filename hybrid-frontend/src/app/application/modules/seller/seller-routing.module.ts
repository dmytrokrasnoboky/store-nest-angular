import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { SellerComponent } from './seller/seller.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { SettingsComponent } from './settings/settings.component';
import { SellerOrderComponent } from './seller-order/seller-order.component';

const routerModule = RouterModule.forChild([
  {
    path: ':sellerId',
    component: SellerComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: StoreComponent,
      },
      {
        path: 'product/create',
        component: CreateProductComponent,
      },
      {
        path: 'product/:productId/edit',
        component: EditProductComponent,
      },
      {
        path: 'orders',
        component: OrdersListComponent,
      },
      {
        path: 'orders/:orderId',
        component: SellerOrderComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
    ],
  },
]);

@NgModule({
  declarations: [],
  imports: [routerModule],
})
export class SellerRoutingModule {}
