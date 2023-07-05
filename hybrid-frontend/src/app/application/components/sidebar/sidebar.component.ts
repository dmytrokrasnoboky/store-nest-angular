import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import {
  selectUserRole,
  selectUser,
} from '../../../shared/store/selectors.store';
import { Role } from '../../../shared/api/models';
import { IUser } from '../../../shared/models/user.model';

interface IMenu {
  state: Role[] | Role;
  name: string;
  icon: string;
  link: string;
  disable?: boolean;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public store = inject(Store);
  userRole$!: Observable<Role[]>;
  user!: IUser;
  public menuItems: IMenu[] = [];
  @Output() onclose = new EventEmitter<void>();

  ngOnInit() {
    this.userRole$ = this.store.select(selectUserRole);
    this.store
      .select(selectUser)
      .pipe(take(1))
      .subscribe((user) => {
        this.user = user;
      });

    this.menuItems = [
      // {
      //   state: Role.BuyerRole,
      //   name: 'Marktplatz',
      //   link: '/',
      //   icon: 'storefront',
      // },
      {
        state: Role.SellerRole,
        name: 'Bestand',
        link: `seller/${this.user?.userId}`,
        icon: 'inventory_2',
      },
      // {
      //   state: Role.BuyerRole,
      //   name: 'Dashboard',
      //   link: '/',
      //   icon: 'dashboard',
      // },
      {
        state: Role.BuyerRole,
        name: 'Produkte',
        link: 'browse',
        icon: 'store',
      },
      {
        state: Role.BuyerRole,
        name: 'Bestellungen',
        link: 'orders',
        icon: 'receipt_long',
      },
      {
        state: Role.SellerRole,
        name: 'Bestellungen',
        link: `seller/${this.user?.userId}/orders`,
        icon: 'receipt_long',
      },
      {
        state: Role.SellerRole,
        name: 'Einstellungen',
        link: `seller/${this.user?.userId}/settings`,
        icon: 'tune',
      },
    ];
  }
}
