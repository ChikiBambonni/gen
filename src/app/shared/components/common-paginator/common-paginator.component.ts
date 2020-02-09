import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild} from '@angular/core';
import { PageEvent, MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-common-paginator',
  templateUrl: './common-paginator.component.html',
  styleUrls: ['./common-paginator.component.scss']
})
export class CommonPaginatorComponent implements OnInit {

  @Input()
  length: number;

  @Input()
  pageSize: number;

  @Input()
  pageSizeOptions: number[];

  @Output()
  page: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  @ViewChild('matpaginator', { static: false }) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
  }

  chagePage($event: PageEvent) {
    this.page.emit($event);
  }
}
