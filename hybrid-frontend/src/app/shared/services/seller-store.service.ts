import { Injectable } from '@angular/core';
import { SellerProductService } from '../api/services/seller-product.service';
import { CreateProductRequest } from '../api/models/create-product-request';
import { SellerService } from '../api/services/seller.service';
import { FormUploadRequest } from '../api/models/form-upload-request';
import { Store } from '@ngrx/store';
import { selectUserId } from '../store/selectors.store';
import { take, tap } from 'rxjs';
import { SellerOrdersService } from '../api/services/seller-orders.service';
import { map } from 'rxjs/operators';
import { OrderStatus } from '../api/models/order-status';

@Injectable({
  providedIn: 'root',
})
export class SellerStoreService {
  public currency = 'chf';
  sellerId!: string;
  constructor(
    private productApi: SellerProductService,
    private ordersApi: SellerOrdersService,
    private sellerApi: SellerService,
    public store: Store
  ) {}

  init() {
    this.store
      .select(selectUserId)
      .pipe(take(1))
      .subscribe((id) => (this.sellerId = id + ''));
  }

  getProducts() {
    return this.productApi.sellerSellerIdProductsGet({
      sellerId: this.sellerId,
    });
  }

  createProduct(body: CreateProductRequest) {
    return this.productApi.sellerSellerIdProductsPost({
      sellerId: this.sellerId,
      body,
    });
  }

  editProduct(body: CreateProductRequest, productId: string) {
    return this.productApi.sellerSellerIdProductsProductIdPut({
      productId,
      sellerId: this.sellerId,
      body,
    });
  }

  getCurrentProduct(productId: string) {
    return this.productApi.sellerSellerIdProductsProductIdGet({
      productId,
      sellerId: this.sellerId,
    });
  }

  uploadFile(body: FormUploadRequest) {
    return this.sellerApi.uploadPost({ body });
  }

  deleteProduct(productId: string) {
    return this.productApi.sellerSellerIdProductsProductIdDelete({
      productId,
      sellerId: this.sellerId,
    });
  }

  getOrders() {
    return this.ordersApi.sellerSellerIdOrdersGet({ sellerId: this.sellerId });
  }

  getCurrentOrder(orderId: string) {
    return this.ordersApi
      .sellerSellerIdOrdersGet({ sellerId: this.sellerId })
      .pipe(
        map((order) => {
          return order.find((item) => item.orderId === orderId);
        })
      );
  }

  updateOrderStatus(orderId: string, newStatus: OrderStatus) {
    return this.ordersApi.sellerSellerIdOrdersOrderIdPut({
      orderId,
      sellerId: this.sellerId,
      body: {
        status: newStatus,
      },
    });
  }
}
