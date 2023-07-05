/* tslint:disable */
/* eslint-disable */
import { Address } from './address';
export interface UpdateBuyerRequest {
  address: Address;

  /**
   * Buyer's company identification number
   */
  companyIdentificationNumber: string;
  email: string;
}
