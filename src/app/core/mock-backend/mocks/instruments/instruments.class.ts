import { PaginationInterface } from '@core/interfaces/pagination.interface';
import { MockBackendFactory } from '@core/mock-backend/mock-backend.class';
import { InstrumentStat } from '@core/interfaces/data.interfaces';
import { INSTRUMENT_MOCK_DATA } from './instruments.constants';

export class InstrumentsMocks extends MockBackendFactory<InstrumentStat> {

  items: InstrumentStat[] = INSTRUMENT_MOCK_DATA;

  constructor() {
    super();

    this.numberFields = ['id'];
  }

  getData(params): PaginationInterface<InstrumentStat> {
    return this.getTableData(params);
  }
}
