import { Component, OnInit } from '@angular/core';
import { sellerOrdersTableColumns } from '../../../../shared/configs/columns.config';
import { SellerStoreService } from '../../../../shared/services/seller-store.service';
import { ProductResponse } from '../../../../shared/api/models/product-response';
import { OrderResponse } from '../../../../shared/api/models/order-response';
import { Amount } from '../../../../shared/api/models/amount';
import {
  IMatTableOrdersData,
  TableColumn,
} from '../../../../shared/models/table.model';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss'],
})
export class OrdersListComponent implements OnInit {
  ordersFromServer: IMatTableOrdersData[] = [];
  columns: TableColumn[] = sellerOrdersTableColumns;

  constructor(private productService: SellerStoreService) {
  }

  ngOnInit(): void {
    this.productService.getOrders().subscribe((value) => {
      this.ordersFromServer = this.preparedDataFromServer(value);
    });
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
    price: { product: ProductResponse; quantity: number }[],
  ): Amount {
    const value = price.reduce(
      (acc, { product, quantity }) => acc + product.price.value * quantity,
      0,
    );

    return { value, currency: this.productService.currency };
  }
}
