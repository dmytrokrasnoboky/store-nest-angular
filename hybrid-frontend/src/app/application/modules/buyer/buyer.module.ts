import { NgModule } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';

import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routerModule = RouterModule.forChild([
  {
    path: '',
    component: ProductsComponent,
  },
  {
    path: ':id',
    component: ProductDetailComponent,
  },
]);

@NgModule({
  declarations: [ProductsComponent, ProductComponent, ProductDetailComponent],
  imports: [
    SharedModule,
    routerModule,
    MatSelectModule,
    MatOptionModule,
    MatCardModule,
  ],
})
export class BuyerModule {}
