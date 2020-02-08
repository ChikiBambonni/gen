import { Component, OnInit } from '@angular/core';

import { HailstoneUtils } from '@core/utils/hailstone.utils';
import { AppInfoRepository } from '@core/services/app-info-repository.service';
import { Hailstone } from '@core/interfaces/data.interfaces';
import { ComponentResponse } from '@core/interfaces/http.interfaces';

@Component({
  selector: 'app-hailstone',
  templateUrl: './hailstone.component.html',
  styleUrls: ['./hailstone.component.scss']
})
export class HailstoneComponent implements OnInit {

  a: number = 0;
  stoppingTime: number = 0;

  constructor(private repository: AppInfoRepository) { }

  ngOnInit() {
  }

  onApply() {
    this.repository.getHailstoneSeries({
      a: this.a
    }).subscribe((res: ComponentResponse<Hailstone>) => {
      console.log('Response', res);
    });
  }
}
