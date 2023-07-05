import { Component, Input } from '@angular/core';
import { IProduct } from '../../../../shared/models/product.model';
import { BuyerOrderProductService } from '../../../../shared/services/buyer-order-product.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  @Input() product!: IProduct;
  constructor(public orderService: BuyerOrderProductService) {}
}
