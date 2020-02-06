import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss']
})
export class CommonTableComponent implements OnInit {

  @Input()
  displayedColumns: string[];

  @Input()
  dataSource: MatTableDataSource<any>;

  @Output()
  rowClick: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('tableDiv',  { static: false })
  tableDiv: ElementRef;

  constructor() {}

  ngOnInit() {
  }

  rowHandler(row) { // TODO: create interface
    this.rowClick.emit(row);
  }
}
