import { ProductResponse } from '../api/models/product-response';

export interface IProduct extends ProductResponse {
  quantity: number;
}
