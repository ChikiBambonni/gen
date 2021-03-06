import { Component, OnInit, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { CommonPaginatorComponent } from '@shared/components/common-paginator/common-paginator.component';
import { DataComponent } from '@core/utils/data-component.class';
import { AppInfoRepository } from '@core/services/app-info-repository.service';
import { ComponentResponse } from '@core/interfaces/http.interfaces';
import { InstrumentItem } from '@core/interfaces/data.interfaces';
import { PaginationInterface } from '@core/interfaces/pagination.interface';
import { pageEvent } from './instruments.constants';

@Component({
  selector: 'app-instruments',
  templateUrl: './instruments.component.html',
  styleUrls: ['./instruments.component.scss']
})
export class InstrumentsComponent extends DataComponent implements OnInit {

  openOnly: boolean = false;
  pageEvent: PageEvent = pageEvent;
  displayedColumns: string[];
  dataSource: MatTableDataSource<any>;

  @ViewChild('paginator', { static: false })
  paginatorComponent: CommonPaginatorComponent;

  private fetchData(event: PageEvent, open: boolean): void {
    this.repository.getInstruments({
      pagesize: event.pageSize,
      page: event.pageIndex + 1,
      openOnly: open
    }).subscribe((res: ComponentResponse<PaginationInterface<InstrumentItem>>) => {
      this.isLoading = false;
      this.error = res.error;
      if (!this.error) {
        this.noDataToDisplay = res.value.elements[0] === undefined;
        this.dataSource = new MatTableDataSource();
        this.displayedColumns = Object.keys(res.value.elements[0] ? res.value.elements[0] : {});
        this.dataSource.data = res.value.elements;
        this.pageEvent.length = res.value.totalElements;
      }
    });
  }

  constructor(private repository: AppInfoRepository) {
    super();
  }

  ngOnInit() {
    this.fetchData(this.pageEvent, this.openOnly);
  }

  changePage($event: PageEvent) {
    this.isLoading = true;
    this.pageEvent = $event;
    this.fetchData(this.pageEvent, this.openOnly);
  }

  changeOpenOnly() {
    this.isLoading = true;
    this.pageEvent = pageEvent;
    this.fetchData(this.pageEvent, this.openOnly);
    this.paginatorComponent.paginator.firstPage();
  }
}
