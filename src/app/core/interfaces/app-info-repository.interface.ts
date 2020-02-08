import { Observable } from 'rxjs';

import { InstrumentItem, Hailstone } from './data.interfaces';
import { ComponentResponse } from './http.interfaces';
import { PaginationInterface } from './pagination.interface';

export interface InfoRepository {
  getInstruments(params?: object): Observable<ComponentResponse<PaginationInterface<InstrumentItem>>>;
  getHailstoneSeries(params?: object): Observable<ComponentResponse<Hailstone>>;
}
