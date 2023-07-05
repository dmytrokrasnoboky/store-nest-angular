import { Component, Input, OnInit } from '@angular/core';
import { ProductResponse } from '../../../../shared/api/models/product-response';
import { IProduct } from '../../../../shared/models/product.model';
import { BuyerOrderProductService } from '../../../../shared/services/buyer-order-product.service';
import { Location } from '@angular/common';
import { ProductService } from '../../../../shared/api/services/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  public product?: IProduct | ProductResponse;
  count = 0;
  @Input('id') productId?: string;
  constructor(
    public orderService: BuyerOrderProductService,
    public location: Location,
    private productService: ProductService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.product = history.state.product;
    this.count = history.state.count;

    if (!this.product) {
      this.productService
        .productsProductIdGet({ productId: this.productId! })
        .subscribe((product) => (this.product = product));
    }
  }

  emitProductQuantityChange(product: ProductResponse, quantity: number) {
    this.orderService.change(product, quantity);
    this.snackBar
      .open('Warenkorb wurde aktualisiert', 'Zum Warenkorb')
      .onAction()
      .subscribe(() => {
        this.router.navigate(['/cart']);
      });
  }
}
