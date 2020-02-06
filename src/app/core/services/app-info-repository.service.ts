import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { BaseApi } from '@core/utils/base-api.class';
import { ComponentResponse } from '@core/interfaces/http.interfaces';

import { environment } from '@environment';
import { Instrument } from '@core/interfaces/data.interfaces';
import { InfoRepository } from '@core/interfaces/app-info-repository.interface';

@Injectable()
export class AppInfoRepository extends BaseApi implements InfoRepository {

  constructor(private httpClient: HttpClient) {
    super();
  }

  getInstruments(params?: object): Observable<ComponentResponse<Instrument[]>> {
    return this.httpClient.get<Instrument[]>(
      `${environment.iapi}/instruments`,
      { params: this.getRequestParams(params) }
    ).pipe(
      map((response: Instrument[]) => this.getSuccessBody(response)),
      catchError((error: HttpErrorResponse) => of(this.getErrorBody<Instrument[]>(error)))
    );
  }
}
