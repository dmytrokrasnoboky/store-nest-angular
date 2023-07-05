import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort, SortDirection } from '@angular/material/sort';
import {
  ColumnTypes,
  IMatTableOrderProductsData,
  IMatTableOrdersData,
  TableColumn,
} from '../../../shared/models/table.model';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';

type DataSource = Partial<IMatTableOrdersData | IMatTableOrderProductsData>;

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @ViewChild(MatSort) sort!: MatSort;
  @Input() columns!: TableColumn[];
  @Input() deleteAction?: (id: any) => Subscription;

  @Input() set data(val: DataSource[]) {
    this.initialData = val;
    this.getDataTableSource(val);
  }

  initialData: DataSource[] = [];

  dataSource = new MatTableDataSource<DataSource>([]);
  displayedColumns: string[] = [];

  public columnTypes = ColumnTypes;

  activeSort: {
    dataKey: string;
    direction: SortDirection;
  } = {
    dataKey: ColumnTypes.ORDER_ID,
    direction: 'asc',
  };

  ngOnInit() {
    this.columns.forEach(({ dataKey, sort }) => {
      if (sort && sort.active) {
        this.activeSort = {
          dataKey: dataKey,
          direction: sort.activeDirection || 'asc',
        };
      }

      this.displayedColumns.push(dataKey);
    });
  }

  getDataTableSource(data: DataSource[]) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.sortingDataAccessor = this.customSortingDataAccessor;
    this.dataSource.sort = this.sort;
  }

  customSortingDataAccessor(item: any, property: string) {
    switch (property) {
      case ColumnTypes.SELLER:
        return item.buyer.companyName;
      case ColumnTypes.ORDER_ID:
        return item['id'];
      case ColumnTypes.PRICE:
        return item.price.value;
      default:
        return item[property];
    }
  }

  removeItem(id: string) {
    if (this.deleteAction) {
      this.deleteAction(id);
      this.initialData = this.initialData.filter((item) => item.id !== id);
      this.getDataTableSource(this.initialData);
    }
  }
}
