import { NgModule } from '@angular/core';
import { StoreComponent } from './store/store.component';
import { SharedModule } from '../shared.module';
import { SellerRoutingModule } from './seller-routing.module';
import { SellerComponent } from './seller/seller.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { CreateEditProductComponent } from './components/create-edit-product/create-edit-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { SettingsComponent } from './settings/settings.component';
import { SellerOrderComponent } from './seller-order/seller-order.component';

@NgModule({
  declarations: [
    StoreComponent,
    SellerComponent,
    CreateProductComponent,
    CreateEditProductComponent,
    EditProductComponent,
    OrdersListComponent,
    SettingsComponent,
    SellerOrderComponent,
  ],
  imports: [SharedModule, SellerRoutingModule],
})
export class SellerModule {}
