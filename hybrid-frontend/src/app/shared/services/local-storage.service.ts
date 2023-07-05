import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  static authTokenKey = 'hybrid.access-token';
  static userData = 'user-data';
  static userShoppingCart = 'user-shopping-cart';

  public setData(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public getData(key: string): any {
    return JSON.parse(localStorage.getItem(key) as string);
  }

  public removeData(key: string): void {
    localStorage.removeItem(key);
  }
}
