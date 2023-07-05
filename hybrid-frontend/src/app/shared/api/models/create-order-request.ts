/* tslint:disable */
/* eslint-disable */
import { Address } from './address';
export interface CreateOrderRequest {
  products: Array<{

/**
 * Product ID
 */
'productId': string;

/**
 * Product quantity
 */
'quantity': number;
}>;

  /**
   * The sellerId this order is for
   */
  sellerId: string;
  shippingAddress: Address;
}
