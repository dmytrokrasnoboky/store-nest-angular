/* tslint:disable */
/* eslint-disable */
import { Address } from './address';
export interface CreateSellerRequest {
  address: Address;

  /**
   * Buyer's company identification number
   */
  companyIdentificationNumber: string;
  email: string;
  password: string;
}
