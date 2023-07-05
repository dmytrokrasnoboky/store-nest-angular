/* tslint:disable */
/* eslint-disable */
import { ProductResponse } from './product-response';
export interface ProductListResponse {
  products: Array<ProductResponse>;

  /**
   * Total number of products
   */
  totalItems: number;
}
