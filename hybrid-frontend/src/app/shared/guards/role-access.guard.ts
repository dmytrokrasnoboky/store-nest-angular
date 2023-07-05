import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRouteSnapshot, Router, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { selectUser } from '../store/selectors.store';
import { Role } from '../api/models';

@Injectable({
  providedIn: 'root',
})
export class roleAccessGuard {
  constructor(private store: Store, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.store.select(selectUser).pipe(
      map((user) => {
        const path = route.url[0]?.path || '';
        const role = user.role[0];

        if (role) {
          if (path.includes('seller') === (role === Role.SellerRole)) {
            return true;
          }
        }

        this.router.navigate(['/']);
        return false;
      })
    );
  }
}
