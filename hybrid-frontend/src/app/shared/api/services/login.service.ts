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

import { LoginRequest } from '../models/login-request';
import { LoginResponse } from '../models/login-response';


/**
 * Login
 */
@Injectable({
  providedIn: 'root',
})
export class LoginService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation loginPost
   */
  static readonly LoginPostPath = '/login';

  /**
   * Login.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loginPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  loginPost$Response(params: {
    body: LoginRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<LoginResponse>> {

    const rb = new RequestBuilder(this.rootUrl, LoginService.LoginPostPath, 'post');
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
        return r as StrictHttpResponse<LoginResponse>;
      })
    );
  }

  /**
   * Login.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `loginPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  loginPost(params: {
    body: LoginRequest
  },
  context?: HttpContext

): Observable<LoginResponse> {

    return this.loginPost$Response(params,context).pipe(
      map((r: StrictHttpResponse<LoginResponse>) => r.body as LoginResponse)
    );
  }

}
