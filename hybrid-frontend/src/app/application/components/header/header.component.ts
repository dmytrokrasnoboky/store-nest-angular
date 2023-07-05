import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OrderStatus } from '../../../shared/api/models/order-status';

interface IButton {
  link?: string;
  name: string;
  disabled?: boolean;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public button?: IButton;
  @Input() title = 'Hi, title';
  @Input() description?: string;

  @Input() set actionButton(val: IButton) {
    this.button = val;
  }

  @Output() buttonEvent = new EventEmitter<string>();
}
