import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IProduct } from '../models/product.model';
import { LocalStorageService } from './local-storage.service';
import { ProductResponse } from '../api/models/product-response';
import { BuyerOrdersService } from '../api/services/buyer-orders.service';
import { ISellersData } from '../models/sellers-data.model';
import { Address } from '../api/models/address';
import { OrderResponse } from '../api/models/order-response';

@Injectable({
  providedIn: 'root',
})
export class BuyerOrderProductService {
  public list$ = new BehaviorSubject<IProduct[]>([]);
  public price$ = new BehaviorSubject<number>(0);
  public currency = 'chf';

  constructor(
    private localStorage: LocalStorageService,
    private orderApi: BuyerOrdersService
  ) {}

  set listData(productList: IProduct[]) {
    this.list$.next(productList);
    this.localStorage.setData(
      LocalStorageService.userShoppingCart,
      this.list$.value
    );
  }

  init() {
    const cartData = this.localStorage.getData(
      LocalStorageService.userShoppingCart
    );

    if (cartData) {
      this.list$.next(cartData);
      this.calculateFullPrice();
    }
  }

  getOrders(): Observable<OrderResponse[]> {
    const buyerId = this.localStorage.getData(
      LocalStorageService.userData
    ).userId;

    return this.orderApi.buyerBuyerIdOrdersGet({
      buyerId,
    });
  }

  getCurrentOrder(orderId: string): Observable<OrderResponse> {
    const buyerId = this.localStorage.getData(
      LocalStorageService.userData
    ).userId;
    return this.orderApi.buyerBuyerIdOrdersOrderIdGet({
      buyerId,
      orderId,
    });
  }

  change(product: ProductResponse, quantity: number) {
    const productList = this.list$.value;
    const index = productList.findIndex((item) => item.id === product.id);
    this.currency = product.price.currency;

    if (index > -1) {
      if (quantity > 0) {
        productList[index].quantity = quantity;
      } else {
        productList.splice(index, 1);
      }
    } else {
      productList.push({ ...product, quantity });
    }

    this.listData = productList;
    this.calculateFullPrice();
  }

  private calculateFullPrice() {
    const newPrice = this.list$.value.reduce((prev, curr) => {
      return prev + curr.price.value * (curr.quantity || 0);
    }, 0);

    this.price$.next(newPrice);
  }

  buyProducts(shippingAddress: Address) {
    const sellersData: ISellersData = {};

    this.list$.value.forEach((item) => {
      const productRequestObject = {
        productId: item.id,
        quantity: item.quantity,
      };

      if (sellersData[item.seller.id]) {
        sellersData[item.seller.id].push(productRequestObject);
      } else {
        sellersData[item.seller.id] = [productRequestObject];
      }
    });

    Object.keys(sellersData).forEach((key) => {
      this.orderApi
        .buyerBuyerIdOrdersPost({
          buyerId: this.localStorage.getData(LocalStorageService.userData)
            .userId,
          body: {
            sellerId: key,
            products: sellersData[key],
            shippingAddress: shippingAddress,
          },
        })
        .subscribe({
          next: (response) => {
            this.listData = [];
            console.log('complete: ', response);
          },
          error: (err) => console.log(err),
        });
    });
  }
}
