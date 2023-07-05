import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductResponse } from '../../../../shared/api/models/product-response';
import { IProduct } from '../../../../shared/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input({ required: true }) product!: IProduct | ProductResponse;
  @Input({ required: true }) count = 1;
  @Input() showDetails = false;

  @Output() productQuantityChange = new EventEmitter<number>();
}
