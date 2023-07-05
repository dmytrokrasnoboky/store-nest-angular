import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit, OnDestroy {
  @Input() quantity: number | undefined;
  @Input() deleteIcon = false;

  @Output() quantityChange = new EventEmitter<number>();
  private quantitySubs$?: Subscription;
  productQuantity = new FormControl(1);

  ngOnInit(): void {
    if (this.quantity) {
      this.productQuantity.setValue(this.quantity);
    }

    this.quantitySubs$ = this.productQuantity.valueChanges
      .pipe(
        tap((value) => {
          this.setNewValue(value);
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.quantitySubs$?.unsubscribe();
  }

  setNewValue(value: number | null) {
    if (value !== null) {
      this.quantityChange.emit(value);
    }
  }

  incrementCount() {
    if (this.productQuantity.value !== null) {
      this.productQuantity.setValue(this.productQuantity.value + 1);
    }
  }

  decrementCount() {
    if (this.productQuantity.value && this.productQuantity.value > 0) {
      this.productQuantity.setValue(this.productQuantity.value - 1);
    }
  }

  onDeleteIcon() {
    this.productQuantity.setValue(0);
  }
}
