import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from '../../../shared/services/local-storage.service';
import { Store } from '@ngrx/store';
import { AuthService } from '../../../shared/services/auth.service';
import { formConfig } from '../../../shared/configs/register.config';
import { FormTypes } from '../../../shared/models/checkout-form.model';
import { CreateBuyerRequest } from '../../../shared/api/models/create-buyer-request';

@Component({
  selector: 'app-register-buyer',
  templateUrl: './register-buyer.component.html',
  styleUrls: ['./register-buyer.component.scss'],
})
export class RegisterBuyerComponent {
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

  createBuyerUser() {
    const { email, password, companyIdentificationNumber, ...address } =
      this.form.value;

    const requestBody = {
      email,
      password,
      address,
      companyIdentificationNumber,
    } as CreateBuyerRequest;

    this.form.disable();
    this.responseError.next(null);
    this.auth.registerBuyer(requestBody).subscribe({
      next: () => {
        this.form.enable();
      },
      error: (error) => {
        this.responseError.next(error.message);
      },
    });
  }
}
