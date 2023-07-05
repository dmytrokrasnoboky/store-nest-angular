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

import { ProductResponse } from '../models/product-response';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation productsProductIdGet
   */
  static readonly ProductsProductIdGetPath = '/products/{productId}';

  /**
   * Get product.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productsProductIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  productsProductIdGet$Response(params: {

    /**
     * ID of product to return
     */
    productId: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ProductResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ProductService.ProductsProductIdGetPath, 'get');
    if (params) {
      rb.path('productId', params.productId, {});
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
   * To access the full response (for headers, for example), `productsProductIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  productsProductIdGet(params: {

    /**
     * ID of product to return
     */
    productId: string;
  },
  context?: HttpContext

): Observable<ProductResponse> {

    return this.productsProductIdGet$Response(params,context).pipe(
      map((r: StrictHttpResponse<ProductResponse>) => r.body as ProductResponse)
    );
  }

}
