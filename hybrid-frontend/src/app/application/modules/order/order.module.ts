import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared.module';
import { OrderComponent } from './order/order.component';
import { OrdersComponent } from './orders/orders.component';

const routerModule = RouterModule.forChild([
  {
    path: '',
    component: OrdersComponent,
  },
  {
    path: ':orderId',
    component: OrderComponent,
  },
]);

@NgModule({
  declarations: [OrdersComponent, OrderComponent],
  imports: [SharedModule, routerModule],
  providers: [],
})
export class OrderModule {}
