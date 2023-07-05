/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { CreateProductRequest } from '../models/create-product-request';
import { CreateProductResponse } from '../models/create-product-response';
import { ProductResponse } from '../models/product-response';
import { UpdateProductRequest } from '../models/update-product-request';


/**
 * Actions by the seller for products
 */
@Injectable({
  providedIn: 'root',
})
export class SellerProductService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation sellerSellerIdProductsGet
   */
  static readonly SellerSellerIdProductsGetPath = '/seller/{sellerId}/products';

  /**
   * Get all products for this seller.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sellerSellerIdProductsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  sellerSellerIdProductsGet$Response(params: {

    /**
     * ID of seller
     */
    sellerId: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<ProductResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, SellerProductService.SellerSellerIdProductsGetPath, 'get');
    if (params) {
      rb.path('sellerId', params.sellerId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ProductResponse>>;
      })
    );
  }

  /**
   * Get all products for this seller.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sellerSellerIdProductsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  sellerSellerIdProductsGet(params: {

    /**
     * ID of seller
     */
    sellerId: string;
  },
  context?: HttpContext

): Observable<Array<ProductResponse>> {

    return this.sellerSellerIdProductsGet$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<ProductResponse>>) => r.body as Array<ProductResponse>)
    );
  }

  /**
   * Path part for operation sellerSellerIdProductsPost
   */
  static readonly SellerSellerIdProductsPostPath = '/seller/{sellerId}/products';

  /**
   * Create product.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sellerSellerIdProductsPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  sellerSellerIdProductsPost$Response(params: {

    /**
     * ID of seller
     */
    sellerId: string;
    body: CreateProductRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CreateProductResponse>> {

    const rb = new RequestBuilder(this.rootUrl, SellerProductService.SellerSellerIdProductsPostPath, 'post');
    if (params) {
      rb.path('sellerId', params.sellerId, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CreateProductResponse>;
      })
    );
  }

  /**
   * Create product.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sellerSellerIdProductsPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  sellerSellerIdProductsPost(params: {

    /**
     * ID of seller
     */
    sellerId: string;
    body: CreateProductRequest
  },
  context?: HttpContext

): Observable<CreateProductResponse> {

    return this.sellerSellerIdProductsPost$Response(params,context).pipe(
      map((r: StrictHttpResponse<CreateProductResponse>) => r.body as CreateProductResponse)
    );
  }

  /**
   * Path part for operation sellerSellerIdProductsProductIdGet
   */
  static readonly SellerSellerIdProductsProductIdGetPath = '/seller/{sellerId}/products/{productId}';

  /**
   * Get product.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sellerSellerIdProductsProductIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  sellerSellerIdProductsProductIdGet$Response(params: {

    /**
     * ID of product to return
     */
    productId: string;

    /**
     * ID of seller
     */
    sellerId: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ProductResponse>> {

    const rb = new RequestBuilder(this.rootUrl, SellerProductService.SellerSellerIdProductsProductIdGetPath, 'get');
    if (params) {
      rb.path('productId', params.productId, {});
      rb.path('sellerId', params.sellerId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProductResponse>;
      })
    );
  }

  /**
   * Get product.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sellerSellerIdProductsProductIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  sellerSellerIdProductsProductIdGet(params: {

    /**
     * ID of product to return
     */
    productId: string;

    /**
     * ID of seller
     */
    sellerId: string;
  },
  context?: HttpContext

): Observable<ProductResponse> {

    return this.sellerSellerIdProductsProductIdGet$Response(params,context).pipe(
      map((r: StrictHttpResponse<ProductResponse>) => r.body as ProductResponse)
    );
  }

  /**
   * Path part for operation sellerSellerIdProductsProductIdPut
   */
  static readonly SellerSellerIdProductsProductIdPutPath = '/seller/{sellerId}/products/{productId}';

  /**
   * Update product.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sellerSellerIdProductsProductIdPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  sellerSellerIdProductsProductIdPut$Response(params: {

    /**
     * ID of product to update
     */
    productId: string;

    /**
     * ID of seller
     */
    sellerId: string;
    body: UpdateProductRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SellerProductService.SellerSellerIdProductsProductIdPutPath, 'put');
    if (params) {
      rb.path('productId', params.productId, {});
      rb.path('sellerId', params.sellerId, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Update product.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sellerSellerIdProductsProductIdPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  sellerSellerIdProductsProductIdPut(params: {

    /**
     * ID of product to update
     */
    productId: string;

    /**
     * ID of seller
     */
    sellerId: string;
    body: UpdateProductRequest
  },
  context?: HttpContext

): Observable<void> {

    return this.sellerSellerIdProductsProductIdPut$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation sellerSellerIdProductsProductIdDelete
   */
  static readonly SellerSellerIdProductsProductIdDeletePath = '/seller/{sellerId}/products/{productId}';

  /**
   * Delete product.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sellerSellerIdProductsProductIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  sellerSellerIdProductsProductIdDelete$Response(params: {

    /**
     * ID of product to delete
     */
    productId: string;

    /**
     * ID of seller
     */
    sellerId: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SellerProductService.SellerSellerIdProductsProductIdDeletePath, 'delete');
    if (params) {
      rb.path('productId', params.productId, {});
      rb.path('sellerId', params.sellerId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Delete product.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sellerSellerIdProductsProductIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  sellerSellerIdProductsProductIdDelete(params: {

    /**
     * ID of product to delete
     */
    productId: string;

    /**
     * ID of seller
     */
    sellerId: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.sellerSellerIdProductsProductIdDelete$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
