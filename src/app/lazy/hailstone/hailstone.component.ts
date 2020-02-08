import { Component, OnInit } from '@angular/core';

import { AppInfoRepository } from '@core/services/app-info-repository.service';
import { Hailstone } from '@core/interfaces/data.interfaces';
import { ComponentResponse } from '@core/interfaces/http.interfaces';
import { DataComponent } from '@core/utils/data-component.class';

@Component({
  selector: 'app-hailstone',
  templateUrl: './hailstone.component.html',
  styleUrls: ['./hailstone.component.scss']
})
export class HailstoneComponent extends DataComponent implements OnInit {

  a: number = 23061912;
  totalStoppingTime: number = 0;

  private fetchData(): void {
    this.isLoading = true;
    this.repository.getHailstoneSeries({
      a: this.a
    }).subscribe((res: ComponentResponse<Hailstone>) => {
      this.isLoading = false;
      this.error = res.error;
      if (!this.error) {
        this.totalStoppingTime = res.value.totalStoppingTime;
      }
    });
  }

  constructor(private repository: AppInfoRepository) {
    super();
  }

  ngOnInit() {
    this.fetchData();
  }

  onApply() {
    this.fetchData();
  }

  changeA() {
    this.totalStoppingTime = null;
  }
}
