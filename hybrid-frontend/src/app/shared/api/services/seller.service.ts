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

import { CreateSellerRequest } from '../models/create-seller-request';
import { CreateSellerResponse } from '../models/create-seller-response';
import { FormUploadRequest } from '../models/form-upload-request';
import { FormUploadResponse } from '../models/form-upload-response';
import { SellerResponse } from '../models/seller-response';
import { UpdateSellerRequest } from '../models/update-seller-request';


/**
 * Actions by the seller
 */
@Injectable({
  providedIn: 'root',
})
export class SellerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation sellerPost
   */
  static readonly SellerPostPath = '/seller';

  /**
   * Create seller account.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sellerPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  sellerPost$Response(params: {
    body: CreateSellerRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CreateSellerResponse>> {

    const rb = new RequestBuilder(this.rootUrl, SellerService.SellerPostPath, 'post');
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
        return r as StrictHttpResponse<CreateSellerResponse>;
      })
    );
  }

  /**
   * Create seller account.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sellerPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  sellerPost(params: {
    body: CreateSellerRequest
  },
  context?: HttpContext

): Observable<CreateSellerResponse> {

    return this.sellerPost$Response(params,context).pipe(
      map((r: StrictHttpResponse<CreateSellerResponse>) => r.body as CreateSellerResponse)
    );
  }

  /**
   * Path part for operation sellerSellerIdGet
   */
  static readonly SellerSellerIdGetPath = '/seller/{sellerId}';

  /**
   * Get seller account.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sellerSellerIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  sellerSellerIdGet$Response(params: {

    /**
     * ID of seller
     */
    sellerId: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SellerResponse>> {

    const rb = new RequestBuilder(this.rootUrl, SellerService.SellerSellerIdGetPath, 'get');
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
        return r as StrictHttpResponse<SellerResponse>;
      })
    );
  }

  /**
   * Get seller account.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sellerSellerIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  sellerSellerIdGet(params: {

    /**
     * ID of seller
     */
    sellerId: string;
  },
  context?: HttpContext

): Observable<SellerResponse> {

    return this.sellerSellerIdGet$Response(params,context).pipe(
      map((r: StrictHttpResponse<SellerResponse>) => r.body as SellerResponse)
    );
  }

  /**
   * Path part for operation sellerSellerIdPut
   */
  static readonly SellerSellerIdPutPath = '/seller/{sellerId}';

  /**
   * Update seller account.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sellerSellerIdPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  sellerSellerIdPut$Response(params: {

    /**
     * ID of seller
     */
    sellerId: string;
    body: UpdateSellerRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SellerService.SellerSellerIdPutPath, 'put');
    if (params) {
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
   * Update seller account.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sellerSellerIdPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  sellerSellerIdPut(params: {

    /**
     * ID of seller
     */
    sellerId: string;
    body: UpdateSellerRequest
  },
  context?: HttpContext

): Observable<void> {

    return this.sellerSellerIdPut$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation uploadPost
   */
  static readonly UploadPostPath = '/upload';

  /**
   * Upload files. E.g. product images.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadPost()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadPost$Response(params?: {
    body?: FormUploadRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<FormUploadResponse>> {

    const rb = new RequestBuilder(this.rootUrl, SellerService.UploadPostPath, 'post');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<FormUploadResponse>;
      })
    );
  }

  /**
   * Upload files. E.g. product images.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `uploadPost$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadPost(params?: {
    body?: FormUploadRequest
  },
  context?: HttpContext

): Observable<FormUploadResponse> {

    return this.uploadPost$Response(params,context).pipe(
      map((r: StrictHttpResponse<FormUploadResponse>) => r.body as FormUploadResponse)
    );
  }

}
