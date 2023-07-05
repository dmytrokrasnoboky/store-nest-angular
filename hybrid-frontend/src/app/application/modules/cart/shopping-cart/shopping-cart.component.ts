import { Component } from '@angular/core';
import { BuyerOrderProductService } from '../../../../shared/services/buyer-order-product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent {
  constructor(
    public orderService: BuyerOrderProductService,
    public router: Router
  ) {}

  navigateToCheckout() {
    this.router.navigate(['checkout']);
  }
}
