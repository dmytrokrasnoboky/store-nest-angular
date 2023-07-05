import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Store } from '@ngrx/store';
import { userAuthSuccess, userLogoutSuccess } from '../store/actions.store';
import { tap } from 'rxjs';
import { LoginRequest } from '../api/models/login-request';
import { LoginService } from '../api/services/login.service';
import { Router } from '@angular/router';
import { BuyerService } from '../api/services/buyer.service';
import { CreateBuyerRequest } from '../api/models/create-buyer-request';
import { Role } from '../api/models/role';
import { SellerService } from '../api/services/seller.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private localStorage: LocalStorageService,
    private store: Store,
    private loginService: LoginService,
    private buyerService: BuyerService,
    private sellerService: SellerService,
    private router: Router
  ) {}

  init() {
    const savedResponse = this.localStorage.getData(
      LocalStorageService.userData
    );

    if (savedResponse) {
      this.store.dispatch(userAuthSuccess({ response: savedResponse }));
    }
  }

  public login(request: LoginRequest) {
    return this.loginService.loginPost({ body: request }).pipe(
      tap((response) => {
        this.localStorage.setData(
          LocalStorageService.authTokenKey,
          response.token
        );
        this.localStorage.setData(LocalStorageService.userData, response);

        this.store.dispatch(userAuthSuccess({ response }));
        if (response.roles.includes(Role.BuyerRole)) {
          this.router.navigate(['browse']);
        } else {
          this.router.navigate(['/']); //todo navigate to seller store
        }
      })
    );
  }

  public logout() {
    this.store.dispatch(userLogoutSuccess());
    this.localStorage.removeData(LocalStorageService.authTokenKey);
    this.localStorage.removeData(LocalStorageService.userData);
    this.router.navigate(['login']);
  }

  public registerBuyer(body: CreateBuyerRequest) {
    return this.buyerService.buyerPost({ body }).pipe(
      tap((response) => {
        console.log(response);
        this.router.navigate(['login']);
      })
    );
  }

  public registerSeller(body: CreateBuyerRequest) {
    return this.sellerService.sellerPost({ body }).pipe(
      tap((response) => {
        console.log(response);
        this.router.navigate(['login']);
      })
    );
  }
}
