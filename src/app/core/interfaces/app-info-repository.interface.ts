import { Observable } from 'rxjs';

import { InstrumentItem } from './data.interfaces';
import { ComponentResponse } from './http.interfaces';

export interface InfoRepository {
  getInstruments(params?: object): Observable<ComponentResponse<InstrumentItem[]>>;
}
