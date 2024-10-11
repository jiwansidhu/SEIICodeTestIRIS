import { AfterViewInit, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FilterOption, FilterStatus, TableColumn } from 'src/app/models/data-table.model';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent<T> implements OnInit, AfterViewInit, OnChanges {
  @Input() columns: TableColumn<T>[] = [];
  @Input() data: T[] = [];
  @Input() pageTitle: string = '';
  @Input() filterOptions: FilterOption[] = [];

  @Input() loading = false;
  @Input() error = '';
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild (MatSort) sort!: MatSort;

  dataSource = new MatTableDataSource<T>([]);
  displayedColumns: string[] = [];
  selectedFilter: FilterStatus = FilterStatus.All;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.displayedColumns = this.columns.map((tableColumn: TableColumn<T>) => tableColumn.dataKey as string);
    this.dataSource.data = this.data;

    this.dataSource.filterPredicate = (data: T, filter: string) => {
      const subdivisionStatusCode = (data as any).subdivisionStatusCode || '';
      return subdivisionStatusCode.trim().toLowerCase().includes(filter);
    };

    this.dataSource.sortingDataAccessor = (data: T, sortHeaderId: string): string | number => {
      switch (sortHeaderId) {
        case 'name':
          return (data as any).name.toLowerCase();
        case 'nearMapImageDate':
          return new Date((data as any).nearMapImageDate).getTime();
        default:
          return (data as any)[sortHeaderId];
      }
    };
  }

  ngAfterViewInit() {
    this.setPaginatorAndSort();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      this.dataSource.data = this.data;
      this.setPaginatorAndSort();
    }
  }

  setPaginatorAndSort() {
    this.cdr.detectChanges();
    if (this.paginator && this.sort) {
      this.dataSource.paginator = this.paginator;
      this.setInitialSort();
    }
  }
  getColumnKey(column: TableColumn<T>): string {
    return column.dataKey as string;
  }

  filterData(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  hasData(): boolean {
    return this.dataSource?.data?.length > 0;
  }

  setInitialSort() {
    if (this.sort) {
      const initialSortColumn = this.columns.find(column => column.dataKey === 'name');
      if (initialSortColumn) {
        this.sort.active = initialSortColumn.dataKey as string;
        this.sort.direction = 'asc';
        this.dataSource.sort = this.sort;
      }
    }
  }
}
