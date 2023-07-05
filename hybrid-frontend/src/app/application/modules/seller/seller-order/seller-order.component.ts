import { Component, Input } from '@angular/core';
import { OrderResponse } from '../../../../shared/api/models/order-response';
import {
  IMatTableOrderProductsData,
  TableColumn,
} from '../../../../shared/models/table.model';
import { orderProductTableColumn } from '../../../../shared/configs/columns.config';
import { Amount } from '../../../../shared/api/models/amount';
import { SellerStoreService } from '../../../../shared/services/seller-store.service';
import {
  addCustomerInformation,
  addOrderInformation,
} from '../../../../shared/configs/additional-info.config';
import { AdditionalArray } from '../../../../shared/models/additional-data.model';
import { OrderStatus } from '../../../../shared/api/models/order-status';

@Component({
  selector: 'app-seller-order',
  templateUrl: './seller-order.component.html',
  styleUrls: ['./seller-order.component.scss'],
})
export class SellerOrderComponent {
  public order?: OrderResponse;
  public additionalOrderInfo = addOrderInformation;
  public additionalCustomerInfo = addCustomerInformation;
  public headerSavedData = { name: 'Status Speichern', disabled: true };

  @Input() set orderId(id: string) {
    this.order = history.state.order as OrderResponse;

    if (this.order) {
      this.setOrderData(this.order);
    } else {
      this.sellerService.getCurrentOrder(id).subscribe((product) => {
        if (product) {
          this.setOrderData(product);
        }
      });
    }
  }

  columns: TableColumn[] = orderProductTableColumn;
  orderFromServer: IMatTableOrderProductsData[] = [];
  price: Amount = {
    currency: 'CHF',
    value: 0,
  };
  newStatus?: OrderStatus;

  constructor(private sellerService: SellerStoreService) {}

  preparedDataForTable(data: OrderResponse): IMatTableOrderProductsData[] {
    return data.products.map(
      ({ product, quantity }): IMatTableOrderProductsData => ({
        id: product.id,
        name: product.name,
        brandName: product.brandName,
        category: product.category,
        quantity,
        price: product.price,
      })
    );
  }

  setOrderData(order: OrderResponse) {
    this.order = order;
    this.orderFromServer = this.preparedDataForTable(order);
    this.price = this.getFullPrice(order);

    this.additionalOrderInfo = this.preparedAdditionalData(
      order,
      this.additionalOrderInfo
    );
    this.additionalCustomerInfo = this.preparedAdditionalData(
      order,
      this.additionalCustomerInfo
    );
  }

  getFullPrice(orderResponse: OrderResponse): Amount {
    const value = orderResponse.products.reduce((acc, curr) => {
      return acc + curr.quantity * curr.product.price.value;
    }, 0);

    return { value, currency: this.sellerService.currency.toUpperCase() };
  }

  preparedAdditionalData(order: OrderResponse, addData: AdditionalArray) {
    return addData.map((item) => {
      switch (item.key) {
        case 'price':
          return { ...item, value: this.price };
        case 'status':
          return { ...item, value: order.status };
        default:
          return {
            ...item,
            value: { ...order, ...order.buyerAddress }[item.key],
          };
      }
    }) as Required<AdditionalArray>;
  }

  changeOrderStatus(event: OrderStatus) {
    this.headerSavedData.disabled = this.order?.status === event;
    this.newStatus = event;
  }

  saveChanges() {
    this.sellerService
      .updateOrderStatus(this.order!.orderId, this.newStatus!)
      .subscribe(() => {
        this.order!.status = this.newStatus!;
        this.headerSavedData.disabled = true;
        console.log('Status changed');
      });
  }
}
