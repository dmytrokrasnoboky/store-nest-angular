import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { BuyerOrderProductService } from '../../../../shared/services/buyer-order-product.service';
import { Address } from '../../../../shared/api/models/address';
import { formConfig } from '../../../../shared/configs/checkout.config';
import { FormTypes } from '../../../../shared/models/checkout-form.model';
import { BuyerService } from '../../../../shared/api/services/buyer.service';
import { LocalStorageService } from '../../../../shared/services/local-storage.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  protected readonly formConfig = formConfig;
  public FormTypes = FormTypes;
  public form = this.fb.group({
    companyName: ['', Validators.required],
    firstName: [''],
    lastName: [''],
    street: ['', Validators.required],
    zip: ['', Validators.required],
    city: ['', Validators.required],
    country: ['', Validators.required],
  });

  constructor(
    public orderService: BuyerOrderProductService,
    private buyerService: BuyerService,
    private localStorage: LocalStorageService,
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    const buyerId = this.localStorage.getData(
      LocalStorageService.userData
    ).userId;

    this.buyerService.buyerBuyerIdGet({ buyerId }).subscribe((buyer) => {
      this.form.patchValue(buyer.address);
    });
  }

  buyProducts() {
    if (this.form.valid) {
      this.orderService.buyProducts(this.form.value as Address);
      this.snackBar.open('Bestellung erfolgreich');
      this.router.navigate(['orders']);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
