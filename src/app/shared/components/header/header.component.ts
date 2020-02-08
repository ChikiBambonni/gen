import { Component, OnInit, Input } from '@angular/core';

import { MainMenuItem } from './header.interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  items: MainMenuItem[];

  constructor() { }

  ngOnInit() {
  }
}
