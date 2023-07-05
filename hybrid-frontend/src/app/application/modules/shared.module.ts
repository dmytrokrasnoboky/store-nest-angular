import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CounterComponent } from '../components/counter/counter.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { HeaderComponent } from '../components/header/header.component';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { TotalPriceComponent } from './cart/shopping-cart/components/total-price/total-price.component';
import { BackButtonComponent } from '../components/back-button/back-button.component';
import { StatusComponent } from '../components/status/status.component';
import { AdditionalInfoComponent } from '../components/additional-info/additional-info.component';
import {
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatSnackBarModule,
} from '@angular/material/snack-bar';
import { TableComponent } from '../components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterModule } from '@angular/router';
import { TextFieldModule } from '@angular/cdk/text-field';

const modules = [
  CommonModule,
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule,
  MatInputModule,
  MatCardModule,
  MatSnackBarModule,
  ReactiveFormsModule,
  NgOptimizedImage,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  TextFieldModule,
  RouterModule,
];

const components = [
  CounterComponent,
  HeaderComponent,
  TotalPriceComponent,
  BackButtonComponent,
  StatusComponent,
  AdditionalInfoComponent,
  TableComponent,
];

@NgModule({
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2000 } },
  ],
  declarations: [...components],
  imports: [...modules],
  exports: [...modules, ...components],
})
export class SharedModule {}
