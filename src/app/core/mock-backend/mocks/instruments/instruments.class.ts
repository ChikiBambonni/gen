import { PaginationInterface } from '@core/interfaces/pagination.interface';
import { MockBackendFactory } from '@core/mock-backend/mock-backend.class';
import { Instrument } from '@core/interfaces/data.interfaces';
import { INSTRUMENT_MOCK_DATA } from './instruments.constants';

export class InstrumentsMocks extends MockBackendFactory<Instrument> {

  items: Instrument[] = INSTRUMENT_MOCK_DATA;

  constructor() {
    super();

    this.numberFields = ['id'];
  }

  getData(params): PaginationInterface<Instrument> {
    return this.getTableData(params);
  }
}
