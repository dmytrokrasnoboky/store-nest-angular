import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiModule } from './shared/api/api.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { storeReducer } from './shared/store/reducer.store';
import { storeFeatureSelectorKey } from './shared/store/selectors.store';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';
import { environment } from '../environments/environment';
import { envToken } from './shared/tokens/env.token';
import { AuthService } from './shared/services/auth.service';
import { BuyerOrderProductService } from './shared/services/buyer-order-product.service';
import { SellerStoreService } from './shared/services/seller-store.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiModule.forRoot({ rootUrl: environment.baseApi }),
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ [storeFeatureSelectorKey]: storeReducer }, {}),
  ],
  declarations: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: envToken,
      useValue: environment,
    },
    {
      provide: APP_INITIALIZER,
      useFactory:
        (
          auth: AuthService,
          order: BuyerOrderProductService,
          seller: SellerStoreService
        ) =>
        () => {
          auth.init();
          order.init();
          seller.init();
        },
      multi: true,
      deps: [AuthService, BuyerOrderProductService, SellerStoreService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
