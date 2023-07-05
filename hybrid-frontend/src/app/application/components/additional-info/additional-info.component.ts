import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OrderStatus } from '../../../shared/api/models/order-status';
import { Amount } from '../../../shared/api/models/amount';
import { AdditionalArray } from '../../../shared/models/additional-data.model';

@Component({
  selector: 'app-additional-info',
  templateUrl: './additional-info.component.html',
  styleUrls: ['./additional-info.component.scss'],
})
export class AdditionalInfoComponent {
  @Input() data: Required<AdditionalArray> = [];
  @Output() statusChanged = new EventEmitter<OrderStatus>();

  getStatus(value: any) {
    return value as OrderStatus;
  }

  getPrice(value: any) {
    return value as Amount;
  }
}
