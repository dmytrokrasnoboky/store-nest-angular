import { Component } from '@angular/core';
import { SellerStoreService } from '../../../../shared/services/seller-store.service';
import { CreateProductRequest } from '../../../../shared/api/models/create-product-request';
import { tap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent {
  constructor(
    private sellerService: SellerStoreService,
    private snackBar: MatSnackBar
  ) {}

  createProduct = (body: CreateProductRequest) =>
    this.sellerService
      .createProduct(body)
      .pipe(tap(() => this.snackBar.open('Product added successfully', 'OK')));
}
