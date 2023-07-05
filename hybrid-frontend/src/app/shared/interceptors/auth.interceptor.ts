import { Inject, Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { LocalStorageService } from '../services/local-storage.service';
import { IEnvironment } from '../models/environment.model';
import { envToken } from '../tokens/env.token';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    @Inject(envToken) private readonly env: IEnvironment,
    private local: LocalStorageService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    if (request.url.indexOf(this.env.baseApi) < 0) {
      return next.handle(request);
    }
    const authToken = this.local.getData(LocalStorageService.authTokenKey);

    if (authToken) {
      request = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${authToken}`),
      });
    }

    return next.handle(request);
  }
}
