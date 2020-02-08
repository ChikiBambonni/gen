import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from '@environment';
import { BaseApi } from '@core/utils/base-api.class';
import { ComponentResponse } from '@core/interfaces/http.interfaces';
import { PaginationInterface } from '@core/interfaces/pagination.interface';
import { InstrumentItem, Hailstone } from '@core/interfaces/data.interfaces';
import { InfoRepository } from '@core/interfaces/app-info-repository.interface';

@Injectable()
export class AppInfoRepository extends BaseApi implements InfoRepository {

  constructor(private httpClient: HttpClient) {
    super();
  }

  getInstruments(params?: object): Observable<ComponentResponse<PaginationInterface<InstrumentItem>>> {
    return this.httpClient.get<PaginationInterface<InstrumentItem>>(
      `${environment.iapi}/instruments`,
      { params: this.getRequestParams(params) }
    ).pipe(
      map((res: PaginationInterface<InstrumentItem>) => this.getSuccessBody(res)),
      catchError((error: HttpErrorResponse) => of(this.getErrorBody<PaginationInterface<InstrumentItem>>(error)))
    );
  }

  getHailstoneSeries(params: object): Observable<ComponentResponse<Hailstone>> {
    return this.httpClient.get<Hailstone>(
      `${environment.iapi}/hailstone`,
      { params: this.getRequestParams(params) }
    ).pipe(
      map((res: Hailstone) => this.getSuccessBody(res)),
      catchError((error: HttpErrorResponse) => of(this.getErrorBody<Hailstone>(error)))
    );
  }
}
