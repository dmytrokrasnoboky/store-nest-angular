import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';
import { CheckoutComponent } from './checkout/checkout.component';

const routerModule = RouterModule.forChild([
  {
    path: '',
    component: CheckoutComponent,
  },
]);

@NgModule({
  declarations: [CheckoutComponent],
  imports: [SharedModule, routerModule],
})
export class CheckoutModule {}
