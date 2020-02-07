import { Component, OnInit } from '@angular/core';

import { AppInfoRepository } from '@core/services/app-info-repository.service';
import { ComponentResponse } from '@core/interfaces/http.interfaces';
import { Instrument } from '@core/interfaces/data.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'gen';

  constructor(private repository: AppInfoRepository) {}

  ngOnInit() {
    this.repository.getInstruments()
      .subscribe((res: ComponentResponse<Instrument[]>) => {
        console.log('Instruments', res);
      });
  }
}
