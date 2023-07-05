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

import { CreateOrderRequest } from '../models/create-order-request';
import { CreateOrderResponse } from '../models/create-order-response';
import { OrderResponse } from '../models/order-response';


/**
 * Actions by the buyer for orders
 */
@Injectable({
  providedIn: 'root',
})
export class BuyerOrdersService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation buyerBuyerIdOrdersGet
   */
  static readonly BuyerBuyerIdOrdersGetPath = '/buyer/{buyerId}/orders';

  /**
   * Get all orders for this buyer.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `buyerBuyerIdOrdersGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  buyerBuyerIdOrdersGet$Response(params: {

    /**
     * ID of buyer
     */
    buyerId: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<OrderResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, BuyerOrdersService.BuyerBuyerIdOrdersGetPath, 'get');
    if (params) {
      rb.path('buyerId', params.buyerId, {});
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
   * Get all orders for this buyer.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `buyerBuyerIdOrdersGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  buyerBuyerIdOrdersGet(params: {

    /**
     * ID of buyer
     */
    buyerId: string;
  },
  context?: HttpContext

): Observable<Array<OrderResponse>> {

    return this.buyerBuyerIdOrdersGet$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<OrderResponse>>) => r.body as Array<OrderResponse>)
    );
  }

  /**
   * Path part for operation buyerBuyerIdOrdersPost
   */
  static readonly BuyerBuyerIdOrdersPostPath = '/buyer/{buyerId}/orders';

  /**
   * Create order.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `buyerBuyerIdOrdersPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  buyerBuyerIdOrdersPost$Response(params: {

    /**
     * ID of buyer
     */
    buyerId: string;
    body?: CreateOrderRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CreateOrderResponse>> {

    const rb = new RequestBuilder(this.rootUrl, BuyerOrdersService.BuyerBuyerIdOrdersPostPath, 'post');
    if (params) {
      rb.path('buyerId', params.buyerId, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CreateOrderResponse>;
      })
    );
  }

  /**
   * Create order.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `buyerBuyerIdOrdersPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  buyerBuyerIdOrdersPost(params: {

    /**
     * ID of buyer
     */
    buyerId: string;
    body?: CreateOrderRequest
  },
  context?: HttpContext

): Observable<CreateOrderResponse> {

    return this.buyerBuyerIdOrdersPost$Response(params,context).pipe(
      map((r: StrictHttpResponse<CreateOrderResponse>) => r.body as CreateOrderResponse)
    );
  }

  /**
   * Path part for operation buyerBuyerIdOrdersOrderIdGet
   */
  static readonly BuyerBuyerIdOrdersOrderIdGetPath = '/buyer/{buyerId}/orders/{orderId}';

  /**
   * Get an order for this buyer.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `buyerBuyerIdOrdersOrderIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  buyerBuyerIdOrdersOrderIdGet$Response(params: {

    /**
     * ID of buyer
     */
    buyerId: string;

    /**
     * ID of order
     */
    orderId: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<OrderResponse>> {

    const rb = new RequestBuilder(this.rootUrl, BuyerOrdersService.BuyerBuyerIdOrdersOrderIdGetPath, 'get');
    if (params) {
      rb.path('buyerId', params.buyerId, {});
      rb.path('orderId', params.orderId, {});
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
   * Get an order for this buyer.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `buyerBuyerIdOrdersOrderIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  buyerBuyerIdOrdersOrderIdGet(params: {

    /**
     * ID of buyer
     */
    buyerId: string;

    /**
     * ID of order
     */
    orderId: string;
  },
  context?: HttpContext

): Observable<OrderResponse> {

    return this.buyerBuyerIdOrdersOrderIdGet$Response(params,context).pipe(
      map((r: StrictHttpResponse<OrderResponse>) => r.body as OrderResponse)
    );
  }

}
