import { Component, Input } from '@angular/core';
import {
  IMatTableOrderProductsData,
  TableColumn,
} from '../../../../shared/models/table.model';
import { BuyerOrderProductService } from '../../../../shared/services/buyer-order-product.service';
import { OrderResponse } from '../../../../shared/api/models/order-response';
import { orderProductTableColumn } from '../../../../shared/configs/columns.config';
import { Amount } from '../../../../shared/api/models/amount';
import { addOrderInformation } from '../../../../shared/configs/additional-info.config';
import { AdditionalArray } from '../../../../shared/models/additional-data.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent {
  public order?: OrderResponse;
  public additionalOrderInfo = addOrderInformation;

  @Input() set orderId(id: string) {
    this.order = history.state.order as OrderResponse;

    if (this.order) {
      this.setOrderData(this.order);
    } else {
      this.productService.getCurrentOrder(id).subscribe((product) => {
        this.setOrderData(product);
      });
    }
  }

  columns: TableColumn[] = orderProductTableColumn;
  orderFromServer: IMatTableOrderProductsData[] = [];
  status = '';
  price: Amount = {
    currency: 'CHF',
    value: 0,
  };

  constructor(private productService: BuyerOrderProductService) {}

  preparedDataFromServer(data: OrderResponse): IMatTableOrderProductsData[] {
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
    this.orderFromServer = this.preparedDataFromServer(order);
    this.status = order.status;
    this.price = this.getFullPrice(order);

    this.additionalOrderInfo = this.preparedAdditionalData(
      order,
      this.additionalOrderInfo
    );
  }

  getFullPrice(orderResponse: OrderResponse): Amount {
    const value = orderResponse.products.reduce((acc, curr) => {
      return acc + curr.quantity * curr.product.price.value;
    }, 0);

    return { value, currency: this.productService.currency.toUpperCase() };
  }

  preparedAdditionalData(order: OrderResponse, addData: AdditionalArray) {
    return addData.map((item) => {
      let value;
      switch (item.key) {
        case 'price':
          value = this.price;
          break;
        case 'status':
          value = order.status;
          break;
        default:
          value = { ...order, ...order.buyerAddress }[item.key];
      }

      return { ...item, value };
    }) as Required<AdditionalArray>;
  }
}
