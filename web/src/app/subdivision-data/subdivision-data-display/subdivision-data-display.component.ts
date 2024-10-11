import { Component, OnInit } from '@angular/core';
import { SubdivisionService } from '../subdivision-data.service';
import { SubDivision } from 'src/app/models/subdivision-data.model';
import { FilterOption, FilterStatus, TableColumn } from 'src/app/models/data-table.model';
import { tableColumnsConfig } from '../table-columns.config';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-subdivision-data-display',
  templateUrl: './subdivision-data-display.component.html',
  styleUrls: ['./subdivision-data-display.component.css']
})
export class SubdivisionDataDisplayComponent implements OnInit {

  myData: SubDivision[] = [];
  myColumns: TableColumn<any>[] = tableColumnsConfig;
  loading = true;
  error = '';

  filterOptions: FilterOption[] = [
    { key: 'All', value: FilterStatus.All },
    { key: 'Active', value: FilterStatus.Active },
    { key: 'Future', value: FilterStatus.Future },
    { key: 'Builtout', value: FilterStatus.Builtout }
  ];

  constructor(private subdivisionService: SubdivisionService) {}

  ngOnInit(): void {
    this.subdivisionService.getAllSubdivisions()
    .pipe(
      finalize(() => {
        this.loading = false;
      })
    )
    .subscribe(
      (data: SubDivision[]) => {
        this.myData = data;
     }, () => {
      this.error = 'Error in fetching data. Please try again later.';
    });
  }
}