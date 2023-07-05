import { Component, OnDestroy, OnInit } from '@angular/core';
import { BuyerService } from '../../../../shared/api/services/buyer.service';
import { debounceTime, Observable, Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';
import { ProductCategory } from '../../../../shared/api/models/product-category';
import { map } from 'rxjs/operators';
import { IProduct } from '../../../../shared/models/product.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ProductResponse } from '../../../../shared/api/models/product-response';
import { BuyerOrderProductService } from '../../../../shared/services/buyer-order-product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  products$!: Observable<{
    products: Array<IProduct>;
    totalItems: number;
  }>;
  categoriesSubs$?: Subscription;
  selectedCategories = new FormControl<ProductCategory[] | null>([]);
  categories: ProductCategory[] = Object.values(ProductCategory);

  constructor(
    private buyer: BuyerService,
    public orderService: BuyerOrderProductService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  count = 0;

  ngOnInit() {
    this.getProducts();

    this.categoriesSubs$ = this.selectedCategories.valueChanges
      .pipe(debounceTime(300))
      .subscribe((value: ProductCategory[] | null) => {
        if (value) {
          this.getProducts(value);
        }
      });
  }

  getProducts(categories?: ProductCategory[]) {
    const params: {
      pageSize: number;
      pageIndex: number;
      category?: ProductCategory[];
    } = {
      pageSize: 10,
      pageIndex: 0,
    };

    if (categories?.length) {
      params.category = categories;
    }

    this.products$ = this.buyer.browseGet(params).pipe(
      map(({ products, totalItems }) => {
        const currentShoppingCartList = this.orderService.list$.value;

        const responseProducts = products.map((product) => {
          const ifInShoppingCart = currentShoppingCartList.find(
            (value) => value.id === product.id
          );

          if (ifInShoppingCart) {
            return ifInShoppingCart;
          }

          return { ...product, quantity: 1 };
        });

        return { products: responseProducts, totalItems };
      })
    );
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

  ngOnDestroy(): void {
    if (this.categoriesSubs$) {
      this.categoriesSubs$.unsubscribe();
    }
  }
}
