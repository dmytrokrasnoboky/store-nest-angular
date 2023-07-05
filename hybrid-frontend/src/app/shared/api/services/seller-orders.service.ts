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

import { OrderResponse } from '../models/order-response';
import { UpdateOrderRequest } from '../models/update-order-request';


/**
 * Actions by the seller for orders
 */
@Injectable({
  providedIn: 'root',
})
export class SellerOrdersService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation sellerSellerIdOrdersGet
   */
  static readonly SellerSellerIdOrdersGetPath = '/seller/{sellerId}/orders';

  /**
   * Get all orders for this seller.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sellerSellerIdOrdersGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  sellerSellerIdOrdersGet$Response(params: {

    /**
     * ID of seller
     */
    sellerId: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<OrderResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, SellerOrdersService.SellerSellerIdOrdersGetPath, 'get');
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
        return r as StrictHttpResponse<Array<OrderResponse>>;
      })
    );
  }

  /**
   * Get all orders for this seller.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sellerSellerIdOrdersGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  sellerSellerIdOrdersGet(params: {

    /**
     * ID of seller
     */
    sellerId: string;
  },
  context?: HttpContext

): Observable<Array<OrderResponse>> {

    return this.sellerSellerIdOrdersGet$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<OrderResponse>>) => r.body as Array<OrderResponse>)
    );
  }

  /**
   * Path part for operation sellerSellerIdOrdersOrderIdGet
   */
  static readonly SellerSellerIdOrdersOrderIdGetPath = '/seller/{sellerId}/orders/{orderId}';

  /**
   * Get an order for this seller.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sellerSellerIdOrdersOrderIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  sellerSellerIdOrdersOrderIdGet$Response(params: {

    /**
     * ID of order
     */
    orderId: string;

    /**
     * ID of seller
     */
    sellerId: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<OrderResponse>> {

    const rb = new RequestBuilder(this.rootUrl, SellerOrdersService.SellerSellerIdOrdersOrderIdGetPath, 'get');
    if (params) {
      rb.path('orderId', params.orderId, {});
      rb.path('sellerId', params.sellerId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<OrderResponse>;
      })
    );
  }

  /**
   * Get an order for this seller.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sellerSellerIdOrdersOrderIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  sellerSellerIdOrdersOrderIdGet(params: {

    /**
     * ID of order
     */
    orderId: string;

    /**
     * ID of seller
     */
    sellerId: string;
  },
  context?: HttpContext

): Observable<OrderResponse> {

    return this.sellerSellerIdOrdersOrderIdGet$Response(params,context).pipe(
      map((r: StrictHttpResponse<OrderResponse>) => r.body as OrderResponse)
    );
  }

  /**
   * Path part for operation sellerSellerIdOrdersOrderIdPut
   */
  static readonly SellerSellerIdOrdersOrderIdPutPath = '/seller/{sellerId}/orders/{orderId}';

  /**
   * Update order.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sellerSellerIdOrdersOrderIdPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  sellerSellerIdOrdersOrderIdPut$Response(params: {

    /**
     * ID of order to update
     */
    orderId: string;

    /**
     * ID of seller
     */
    sellerId: string;
    body: UpdateOrderRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SellerOrdersService.SellerSellerIdOrdersOrderIdPutPath, 'put');
    if (params) {
      rb.path('orderId', params.orderId, {});
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
   * Update order.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sellerSellerIdOrdersOrderIdPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  sellerSellerIdOrdersOrderIdPut(params: {

    /**
     * ID of order to update
     */
    orderId: string;

    /**
     * ID of seller
     */
    sellerId: string;
    body: UpdateOrderRequest
  },
  context?: HttpContext

): Observable<void> {

    return this.sellerSellerIdOrdersOrderIdPut$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
