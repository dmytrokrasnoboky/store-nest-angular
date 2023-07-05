/* tslint:disable */
/* eslint-disable */
import { Amount } from './amount';
import { ImageUrl } from './image-url';
import { ProductCategory } from './product-category';
export interface UpdateProductRequest {

  /**
   * Product brand name
   */
  brandName?: string;
  category?: ProductCategory;

  /**
   * Product description
   */
  description?: string;
  imageUrl?: ImageUrl;

  /**
   * Product name
   */
  name?: string;
  price?: Amount;
}
