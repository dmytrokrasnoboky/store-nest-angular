import { ColumnTypes, TableColumn } from '../models/table.model';

const ordersTableColumns: TableColumn[] = [
  {
    dataKey: ColumnTypes.ORDER_ID,
    displayName: 'Order ID',
  },
  {
    dataKey: ColumnTypes.DATE,
    displayName: 'Datum',
    sort: {
      active: true,
      activeDirection: 'desc',
    },
  },
  {
    dataKey: ColumnTypes.STATUS,
    displayName: 'Status',
  },
  {
    dataKey: ColumnTypes.SELLER,
    displayName: 'Händler',
  },
  {
    dataKey: ColumnTypes.PRICE,
    displayName: 'Preis',
  },
];

export const buyerOrdersTableColumns: TableColumn[] = [
  ...ordersTableColumns,
  {
    dataKey: ColumnTypes.DETAILS,
    displayName: '',
    disabled: true,
    width: '120px 1 0',
  },
];

export const sellerOrdersTableColumns: TableColumn[] = [
  ...ordersTableColumns,
  {
    dataKey: ColumnTypes.ORDER_EDIT,
    displayName: '',
    disabled: true,
  },
];

export const orderProductTableColumn: TableColumn[] = [
  {
    dataKey: ColumnTypes.PRODUCT_ID,
    displayName: 'Product ID',
    sort: {
      active: true,
      activeDirection: 'asc',
    },
  },
  {
    dataKey: ColumnTypes.PRODUCT_NAME,
    displayName: 'Produkt Name',
    width: '320px 1 0',
  },
  {
    dataKey: ColumnTypes.BRAND_NAME,
    displayName: 'Brand Name',
  },
  {
    dataKey: ColumnTypes.CATEGORY,
    displayName: 'Category',
  },
  {
    dataKey: ColumnTypes.QUANTITY,
    displayName: 'Menge',
  },
  {
    dataKey: ColumnTypes.PRICE,
    displayName: 'Preis',
  },
];
export const sellerProductTableColumn: TableColumn[] = [
  {
    dataKey: ColumnTypes.PRODUCT_ID,
    displayName: 'Product ID',
    sort: {
      active: true,
      activeDirection: 'asc',
    },
  },
  {
    dataKey: ColumnTypes.PRODUCT_NAME,
    displayName: 'Produkt Name',
    width: '320px 1 0',
  },
  {
    dataKey: ColumnTypes.BRAND_NAME,
    displayName: 'Brand Name',
  },
  {
    dataKey: ColumnTypes.CATEGORY,
    displayName: 'Category',
  },
  {
    dataKey: ColumnTypes.PRICE,
    displayName: 'Preis',
  },
  {
    dataKey: ColumnTypes.PRODUCT_EDIT,
    displayName: '',
    disabled: true,
    width: '120px 1 0',
  },
  {
    dataKey: ColumnTypes.DELETE,
    displayName: '',
    disabled: true,
    width: '120px 1 0',
  },
];
