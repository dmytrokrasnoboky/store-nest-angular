import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from '../../../shared/services/local-storage.service';
import { Store } from '@ngrx/store';
import { AuthService } from '../../../shared/services/auth.service';
import { formConfig } from '../../../shared/configs/register.config';
import { FormTypes } from '../../../shared/models/checkout-form.model';
import { CreateBuyerRequest } from '../../../shared/api/models/create-buyer-request';
import { CreateSellerRequest } from '../../../shared/api/models/create-seller-request';

@Component({
  selector: 'app-register-buyer',
  templateUrl: './register-seller.component.html',
  styleUrls: ['./register-seller.component.scss'],
})
export class RegisterSellerComponent {
  protected readonly formConfig = formConfig;
  protected readonly FormTypes = FormTypes;

  public form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],

    firstName: [''],
    lastName: [''],
    companyName: ['', [Validators.required]],
    street: ['', [Validators.required]],
    city: ['', [Validators.required]],
    zip: ['', [Validators.required]],
    country: ['', [Validators.required]],

    companyIdentificationNumber: ['', [Validators.required]],
  });

  responseError = new BehaviorSubject<string | null>(null);

  constructor(
    private fb: FormBuilder,
    private localStorageService: LocalStorageService,
    private store: Store,
    private auth: AuthService
  ) {}

  createSellerUser() {
    const { email, password, companyIdentificationNumber, ...address } =
      this.form.value;

    const requestBody = {
      email,
      password,
      address,
      companyIdentificationNumber,
    } as CreateSellerRequest;

    this.form.disable();
    this.responseError.next(null);
    this.auth.registerSeller(requestBody).subscribe({
      next: () => {
        this.form.enable();
      },
      error: (error) => {
        this.responseError.next(error.message);
      },
    });
  }
}
