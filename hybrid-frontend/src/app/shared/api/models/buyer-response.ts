/* tslint:disable */
/* eslint-disable */
import { Address } from './address';
export interface BuyerResponse {
  address: Address;

  /**
   * Buyer's company identification number
   */
  companyIdentificationNumber: string;
  email: string;

  /**
   * Buyer's ID
   */
  id: string;
}
