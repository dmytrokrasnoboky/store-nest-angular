import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RegisterBuyerComponent } from './pages/register-buyer/register-buyer.component';
import { RegisterSellerComponent } from './pages/register-seller/register-seller.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
  },
  {
    path: 'merchant',
    component: RegisterBuyerComponent,
  },
  {
    path: 'seller',
    component: RegisterSellerComponent,
  },
];

const routerModule = RouterModule.forChild(routes);

@NgModule({
  declarations: [
    RegisterComponent,
    RegisterBuyerComponent,
    RegisterSellerComponent,
  ],
  imports: [
    CommonModule,
    routerModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
})
export class RegisterModule {}
