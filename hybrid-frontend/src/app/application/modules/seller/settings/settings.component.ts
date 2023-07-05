import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  public form = this.fb.group({
    email: [''],
    password: [''],

    companyName: [''],
    companyIdentificationNumber: [''],

    firstName: [''],
    lastName: [''],
    street: [''],
    city: [''],
    zip: [''],
    country: [''],
  });

  constructor(private fb: FormBuilder) {
    this.form.disable();
  }

  onSubmit() {
    console.log(this.form);
  }
}
