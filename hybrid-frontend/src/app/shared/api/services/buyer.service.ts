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

import { BuyerResponse } from '../models/buyer-response';
import { CreateBuyerRequest } from '../models/create-buyer-request';
import { CreateBuyerResponse } from '../models/create-buyer-response';
import { ProductCategory } from '../models/product-category';
import { ProductListResponse } from '../models/product-list-response';
import { UpdateBuyerRequest } from '../models/update-buyer-request';


/**
 * Actions by the buyer
 */
@Injectable({
  providedIn: 'root',
})
export class BuyerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation browseGet
   */
  static readonly BrowseGetPath = '/browse';

  /**
   * Browse products.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `browseGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  browseGet$Response(params: {

    /**
     * Number of products to return
     */
    pageSize: number;

    /**
     * Number of products to skip
     */
    pageIndex: number;

    /**
     * Category of product
     */
    category?: Array<ProductCategory>;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ProductListResponse>> {

    const rb = new RequestBuilder(this.rootUrl, BuyerService.BrowseGetPath, 'get');
    if (params) {
      rb.query('pageSize', params.pageSize, {});
      rb.query('pageIndex', params.pageIndex, {});
      rb.query('category', params.category, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProductListResponse>;
      })
    );
  }

  /**
   * Browse products.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `browseGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  browseGet(params: {

    /**
     * Number of products to return
     */
    pageSize: number;

    /**
     * Number of products to skip
     */
    pageIndex: number;

    /**
     * Category of product
     */
    category?: Array<ProductCategory>;
  },
  context?: HttpContext

): Observable<ProductListResponse> {

    return this.browseGet$Response(params,context).pipe(
      map((r: StrictHttpResponse<ProductListResponse>) => r.body as ProductListResponse)
    );
  }

  /**
   * Path part for operation buyerPost
   */
  static readonly BuyerPostPath = '/buyer';

  /**
   * Create buyer account.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `buyerPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  buyerPost$Response(params: {
    body: CreateBuyerRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CreateBuyerResponse>> {

    const rb = new RequestBuilder(this.rootUrl, BuyerService.BuyerPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CreateBuyerResponse>;
      })
    );
  }

  /**
   * Create buyer account.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `buyerPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  buyerPost(params: {
    body: CreateBuyerRequest
  },
  context?: HttpContext

): Observable<CreateBuyerResponse> {

    return this.buyerPost$Response(params,context).pipe(
      map((r: StrictHttpResponse<CreateBuyerResponse>) => r.body as CreateBuyerResponse)
    );
  }

  /**
   * Path part for operation buyerBuyerIdGet
   */
  static readonly BuyerBuyerIdGetPath = '/buyer/{buyerId}';

  /**
   * Get buyer account.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `buyerBuyerIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  buyerBuyerIdGet$Response(params: {

    /**
     * ID of buyer
     */
    buyerId: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<BuyerResponse>> {

    const rb = new RequestBuilder(this.rootUrl, BuyerService.BuyerBuyerIdGetPath, 'get');
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
        return r as StrictHttpResponse<BuyerResponse>;
      })
    );
  }

  /**
   * Get buyer account.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `buyerBuyerIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  buyerBuyerIdGet(params: {

    /**
     * ID of buyer
     */
    buyerId: string;
  },
  context?: HttpContext

): Observable<BuyerResponse> {

    return this.buyerBuyerIdGet$Response(params,context).pipe(
      map((r: StrictHttpResponse<BuyerResponse>) => r.body as BuyerResponse)
    );
  }

  /**
   * Path part for operation buyerBuyerIdPut
   */
  static readonly BuyerBuyerIdPutPath = '/buyer/{buyerId}';

  /**
   * Update buyer account.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `buyerBuyerIdPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  buyerBuyerIdPut$Response(params: {

    /**
     * ID of buyer
     */
    buyerId: string;
    body: UpdateBuyerRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BuyerService.BuyerBuyerIdPutPath, 'put');
    if (params) {
      rb.path('buyerId', params.buyerId, {});
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
   * Update buyer account.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `buyerBuyerIdPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  buyerBuyerIdPut(params: {

    /**
     * ID of buyer
     */
    buyerId: string;
    body: UpdateBuyerRequest
  },
  context?: HttpContext

): Observable<void> {

    return this.buyerBuyerIdPut$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
