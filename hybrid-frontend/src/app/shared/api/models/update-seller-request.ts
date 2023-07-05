/* tslint:disable */
/* eslint-disable */
import { Address } from './address';
export interface UpdateSellerRequest {
  address: Address;

  /**
   * Seller's company identification number
   */
  companyIdentificationNumber: string;
  email: string;
}
