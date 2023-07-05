import { Amount } from '../api/models/amount';
import { OrderResponse } from '../api/models/order-response';

export interface IAdditionalData {
  price?: Amount;
  order?: OrderResponse;
}
