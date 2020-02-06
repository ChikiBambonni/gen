import { Observable } from 'rxjs';

import { Instrument } from './data.interfaces';
import { ComponentResponse } from './http.interfaces';

export interface InfoRepository {
  getInstruments(params?: object): Observable<ComponentResponse<Instrument[]>>;
}
