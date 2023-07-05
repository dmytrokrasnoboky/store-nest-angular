/* tslint:disable */
/* eslint-disable */
import { Amount } from './amount';
import { ImageUrl } from './image-url';
import { ProductCategory } from './product-category';
import { ProductSellerResponse } from './product-seller-response';
export interface ProductResponse {

  /**
   * Product brand name
   */
  brandName: string;
  category: ProductCategory;

  /**
   * Product description
   */
  description?: string;

  /**
   * Product ID
   */
  id: string;
  imageUrl?: ImageUrl;

  /**
   * Product name
   */
  name: string;
  price: Amount;
  seller: ProductSellerResponse;
}
