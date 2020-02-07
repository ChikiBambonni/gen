import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { MainMenuItem } from '@shared/components/header/header.interfaces';
import { mainMenuItems } from '@shared/components/header/header.constants';
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
  menuItems: MainMenuItem[] = mainMenuItems;
  pageEvent: PageEvent = pageEvent;
  displayedColumns: string[];
  dataSource: MatTableDataSource<any>;

  private fetchData(event: PageEvent) {
    this.repository.getInstruments({
      pagesize: event.pageSize,
      page: event.pageIndex + 1
    }).subscribe((res: ComponentResponse<PaginationInterface<InstrumentItem>>) => {
      this.isLoading = false;
      this.error = res.error;
      this.dataSource = new MatTableDataSource();
      this.displayedColumns = Object.keys(res.value.elements[0]);
      this.dataSource.data = res.value.elements;
      this.pageEvent.length = res.value.totalElements;
    });
  }

  constructor(private repository: AppInfoRepository) {
    super();
  }

  ngOnInit() {
    this.fetchData(this.pageEvent);
  }

  changePage($event: PageEvent) {
    this.isLoading = true;
    this.pageEvent = $event;
    this.fetchData(this.pageEvent);
  }

  changeOpenOnly() {
    console.log('-------', this.openOnly);
  }
}
