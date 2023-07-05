import { Component } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  selectIsAuthorized,
  selectUser,
} from '../../../shared/store/selectors.store';
import { IUser } from '../../../shared/models/user.model';
import { Role } from '../../../shared/api/models';
import { AuthService } from '../../../shared/services/auth.service';
import { MatSidenav } from '@angular/material/sidenav';
import { BuyerOrderProductService } from '../../../shared/services/buyer-order-product.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss'],
})
export class ApplicationComponent {
  public mobileQuery$: Observable<boolean>;
  public isAuthorized$: Observable<boolean>;
  public user$: Observable<IUser>;
  public roles = Role;

  constructor(
    private breakpoint: BreakpointObserver,
    public store: Store,
    public authService: AuthService,
    public order: BuyerOrderProductService
  ) {
    this.mobileQuery$ = this.breakpoint
      .observe(['(min-width: 600px)'])
      .pipe(map((state: BreakpointState) => state.matches));
    this.isAuthorized$ = this.store.select(selectIsAuthorized);
    this.user$ = this.store.select(selectUser);
  }

  onClose(sidenav: MatSidenav) {
    if (sidenav.mode === 'over') {
      sidenav.close();
    }
  }
}
