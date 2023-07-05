import { AdditionalArray } from '../models/additional-data.model';

export const addOrderInformation: AdditionalArray = [
  { title: 'Order ID', key: 'orderId' },
  { title: 'Betrag total', key: 'price' },
  { title: 'Status', key: 'status' },
];
export const addCustomerInformation: AdditionalArray = [
  { title: 'Unternehmensname', key: 'companyName' },
  { title: 'Unternehmensidentifikation', key: 'companyName' },
  { title: 'Vorname', key: 'firstName' },
  { title: 'Nachname', key: 'lastName' },
  { title: 'Strasse', key: 'street' },
  { title: 'Stadt', key: 'city' },
  { title: 'Postleitzahl', key: 'zip' },
  { title: 'Land', key: 'country' },
];
