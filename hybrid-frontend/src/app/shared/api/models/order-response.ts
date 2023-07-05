/* tslint:disable */
/* eslint-disable */
import { Address } from './address';
import { OrderSellerResponse } from './order-seller-response';
import { OrderStatus } from './order-status';
import { ProductResponse } from './product-response';
export interface OrderResponse {
  buyerAddress: Address;

  /**
   * Buyer ID
   */
  buyerId: string;

  /**
   * Order creation date
   */
  created: string;

  /**
   * Order ID
   */
  orderId: string;
  products: Array<{
'product': ProductResponse;

/**
 * Product quantity
 */
'quantity': number;
}>;
  seller: OrderSellerResponse;
  status: OrderStatus;
}
