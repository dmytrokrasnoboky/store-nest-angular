import { Component, OnInit } from '@angular/core';
import { OrderResponse } from '../../../../shared/api/models/order-response';
import {
  IMatTableOrdersData,
  TableColumn,
} from '../../../../shared/models/table.model';
import { buyerOrdersTableColumns } from '../../../../shared/configs/columns.config';
import { BuyerOrderProductService } from '../../../../shared/services/buyer-order-product.service';
import { tap } from 'rxjs';
import { Amount } from '../../../../shared/api/models/amount';
import { ProductResponse } from '../../../../shared/api/models/product-response';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  ordersFromServer: IMatTableOrdersData[] = [];
  columns: TableColumn[] = buyerOrdersTableColumns;

  constructor(private productService: BuyerOrderProductService) {}

  ngOnInit(): void {
    this.productService
      .getOrders()
      .pipe(
        tap((value: OrderResponse[]) => {
          this.ordersFromServer = this.preparedDataFromServer(value);
        })
      )
      .subscribe();
  }

  preparedDataFromServer(data: OrderResponse[]): IMatTableOrdersData[] {
    return data.map((item) => ({
      id: item.orderId,
      date: item.created,
      status: item.status,
      seller: item.seller,
      price: this.getFullPrice(item.products),
      order: item,
    }));
  }

  getFullPrice(
    price: { product: ProductResponse; quantity: number }[]
  ): Amount {
    const value = price.reduce(
      (acc, { product, quantity }) => acc + product.price.value * quantity,
      0
    );

    return { value, currency: this.productService.currency };
  }
}
