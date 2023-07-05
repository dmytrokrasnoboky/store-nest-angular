import { NgModule } from '@angular/core';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';

const routerModule = RouterModule.forChild([
  {
    path: '',
    component: ShoppingCartComponent,
  },
]);

@NgModule({
  declarations: [ShoppingCartComponent, CartItemComponent],
  imports: [SharedModule, routerModule],
})
export class CartModule {}
