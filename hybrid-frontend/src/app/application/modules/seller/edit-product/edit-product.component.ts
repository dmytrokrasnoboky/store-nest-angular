import { Component, Input, OnInit } from '@angular/core';
import { SellerStoreService } from '../../../../shared/services/seller-store.service';
import { CreateProductRequest } from '../../../../shared/api/models/create-product-request';
import { ProductResponse } from '../../../../shared/api/models/product-response';
import { Observable, of, switchMap, tap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit {
  @Input() productId!: string;
  public product?: ProductResponse;
  public productObs$!: Observable<ProductResponse>;

  constructor(
    private sellerService: SellerStoreService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.productObs$ = of(history.state.product).pipe(
      switchMap((product?: ProductResponse) => {
        return product
          ? of(product)
          : this.sellerService.getCurrentProduct(this.productId!);
      })
    );
  }

  editProduct = (body: CreateProductRequest) =>
    this.sellerService
      .editProduct(body, this.productId)
      .pipe(tap(() => this.snackBar.open('Product edited successfully', 'OK')));
}
