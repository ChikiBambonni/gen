import { PaginationInterface } from './../interfaces/pagination.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { BaseApi } from '@core/utils/base-api.class';
import { ComponentResponse } from '@core/interfaces/http.interfaces';

import { environment } from '@environment';
import { Instrument, InstrumentItem, InstrumentStat, TradingHour } from '@core/interfaces/data.interfaces';
import { InfoRepository } from '@core/interfaces/app-info-repository.interface';

@Injectable()
export class AppInfoRepository extends BaseApi implements InfoRepository {

  constructor(private httpClient: HttpClient) {
    super();
  }

  // getInstruments(params?: object): Observable<ComponentResponse<PaginationInterface<InstrumentItem>>> {
  getInstruments(params?: object): Observable<any> {
    return this.httpClient.get<PaginationInterface<InstrumentItem>>(
      `${environment.iapi}/instruments`,
      { params: this.getRequestParams(params) }
    ).pipe(
      map((res: PaginationInterface<InstrumentItem>) => this.getSuccessBody(res)),
      catchError((error: HttpErrorResponse) => of(this.getErrorBody<PaginationInterface<InstrumentItem>>(error)))
    );
  }
}
