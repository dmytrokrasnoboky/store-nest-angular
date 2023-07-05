import { Component, Input, OnInit } from '@angular/core';
import {
  IMatTableProductsData,
  TableColumn,
} from '../../../../shared/models/table.model';
import { sellerProductTableColumn } from '../../../../shared/configs/columns.config';
import { ProductResponse } from '../../../../shared/api/models/product-response';
import { SellerStoreService } from '../../../../shared/services/seller-store.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit {
  ordersFromServer: IMatTableProductsData[] = [];
  columns: TableColumn[] = sellerProductTableColumn;
  linkButton = { link: 'product/create', name: 'Neues Produkt hinzufügen' };

  constructor(private productService: SellerStoreService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((value) => {
      this.ordersFromServer = this.preparedDataFromServer(value);
    });
  }

  preparedDataFromServer(data: ProductResponse[]): IMatTableProductsData[] {
    return data.map(
      (value: ProductResponse): IMatTableProductsData => ({
        id: value.id,
        name: value.name,
        brandName: value.brandName,
        category: value.category,
        price: value.price,
        product: value,
      })
    );
  }

  deleteProduct = (id: string): Subscription =>
    this.productService.deleteProduct(id).subscribe();
}
