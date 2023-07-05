/* tslint:disable */
/* eslint-disable */
import { Address } from './address';
export interface SellerResponse {
  address: Address;

  /**
   * Seller's company identification number
   */
  companyIdentificationNumber: string;
  email: string;

  /**
   * Buyer's ID
   */
  id: string;
}
