import { Amount } from '../api/models/amount';
import { OrderStatus } from '../api/models/order-status';
import { OrderResponse } from '../api/models/order-response';
import { Address } from '../api/models/address';

interface AdditionalItem<
  T extends string,
  V extends string | Amount | OrderStatus
> {
  key: T;
  title: string;
  value?: V;
}

export type AdditionalArray = Array<
  | AdditionalItem<keyof OrderResponse | keyof Address, string>
  | AdditionalItem<'price', Amount>
  | AdditionalItem<'status', OrderStatus>
>;
