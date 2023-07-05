/* tslint:disable */
/* eslint-disable */
import { Address } from './address';
export interface CreateBuyerRequest {
  address: Address;

  /**
   * Buyer's company identification number
   */
  companyIdentificationNumber: string;
  email: string;
  password: string;
}
