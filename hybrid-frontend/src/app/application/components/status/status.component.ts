import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OrderStatus } from '../../../shared/api/models/order-status';
import { FormControl } from '@angular/forms';
import { take } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { selectUserRole } from '../../../shared/store/selectors.store';
import { Role } from '../../../shared/api/models/role';

export const selectConfig = [
  {
    type: OrderStatus.Pending,
    label: 'Pending',
    icon: 'hourglass_empty',
    class: 'status',
  },
  {
    type: OrderStatus.Cancelled,
    label: 'Cancelled',
    icon: 'close',
    class: 'status',
  },
  {
    type: OrderStatus.Processing,
    label: 'Processing',
    icon: 'pending_actions',
    class: 'status',
  },
  {
    type: OrderStatus.Shipped,
    label: 'Shipped',
    icon: 'done',
    class: 'status status--complete',
  },
];

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent {
  @Input() canChange = false;

  @Input() set status(val: OrderStatus) {
    this.setCurrentStatus(val);
    this.selectedStatusValue.patchValue(val);
  }

  @Output() changeStatus = new EventEmitter<OrderStatus>();

  public selectConfig = selectConfig;
  public currentStatus = selectConfig[0];
  public selectedStatusValue = new FormControl('');
  public isSeller = false;

  constructor(private store: Store) {
    this.store
      .select(selectUserRole)
      .pipe(take(1))
      .subscribe((userRole) => {
        this.isSeller = userRole[0] === Role.SellerRole;
      });

    this.selectedStatusValue.valueChanges.pipe(takeUntilDestroyed()).subscribe({
      next: (value) => {
        if (value) {
          this.setCurrentStatus(value as OrderStatus);
          this.changeStatus.emit(value as OrderStatus);
        }
      },
    });
  }

  private setCurrentStatus(val: OrderStatus) {
    this.currentStatus =
      this.selectConfig.find((value) => value.type === val) ||
      this.selectConfig[0];
  }
}
