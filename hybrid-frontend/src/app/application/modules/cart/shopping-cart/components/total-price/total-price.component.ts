import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-total-price',
  templateUrl: './total-price.component.html',
  styleUrls: ['./total-price.component.scss'],
})
export class TotalPriceComponent {
  @Input() price = 0;
  @Input() currency = 'chf';
  @Input() isBackButtonVisible = false;
  @Input() buttonTitle = 'Add title';
  @Input() backButtonTitle = 'Add back title';

  @Output() buyProducts = new EventEmitter();
}
