import { SortDirection } from '@angular/material/sort';
import { ProductCategory } from '../api/models/product-category';
import { Amount } from '../api/models/amount';
import { OrderSellerResponse } from '../api/models/order-seller-response';
import { ProductResponse } from '../api/models/product-response';
import { OrderResponse } from '../api/models/order-response';

export enum ColumnTypes {
  ORDER_ID = 'orderId',
  DATE = 'date',
  STATUS = 'status',
  SELLER = 'seller',
  PRICE = 'price',
  DETAILS = 'details',

  PRODUCT_ID = 'id',
  PRODUCT_NAME = 'name',
  BRAND_NAME = 'brandName',
  CATEGORY = 'category',
  QUANTITY = 'quantity',

  DELETE = 'delete',
  ORDER_EDIT = 'orderEdit',
  PRODUCT_EDIT = 'productEdit',
}

export interface ISort {
  active?: boolean;
  activeDirection?: SortDirection;
  disable?: boolean;
}

export interface TableColumn {
  dataKey: ColumnTypes;
  displayName: string;
  width?: string;
  sort?: ISort;
  disabled?: boolean;
}

export interface IMatTableOrdersData {
  id: string;
  date: string;
  status: string;
  seller: OrderSellerResponse;
  price: Amount;
  order: OrderResponse;
}

export interface IMatTableProductsData {
  id: string;
  name: string;
  brandName: string;
  category: ProductCategory;
  price: Amount;
  product?: ProductResponse;
}

export interface IMatTableOrderProductsData extends IMatTableProductsData {
  quantity: number;
}
