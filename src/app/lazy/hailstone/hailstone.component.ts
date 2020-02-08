import { Component, OnInit } from '@angular/core';

import { HailstoneUtils } from '@core/utils/hailstone.utils';

@Component({
  selector: 'app-hailstone',
  templateUrl: './hailstone.component.html',
  styleUrls: ['./hailstone.component.scss']
})
export class HailstoneComponent implements OnInit {

  a: number = 0;
  stoppingTime: number = 0;

  constructor() { }

  ngOnInit() {
  }

  onApply() {
    this.stoppingTime = HailstoneUtils.getHailstoneSeries(this.a);
  }
}
