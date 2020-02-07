import { PaginationInterface } from '@core/interfaces/pagination.interface';
import { MockBackendFactory } from '@core/mock-backend/mock-backend.class';
import { InstrumentStat, TradingHour, InstrumentItem } from '@core/interfaces/data.interfaces';
import { INSTRUMENT_MOCK_DATA } from './instruments.constants';

export class InstrumentsMocks extends MockBackendFactory<InstrumentItem> {



  /* private getOpenOnly(): InstrumentStat[] {

  } */

  private ToTableItems(statItems: InstrumentStat[]): InstrumentItem[] {
    const now = +new Date();

    return statItems.map((element: InstrumentStat) => {
      return {
        instrumentID: element.instrumentID,
        name: element.name,
        isOpen: element.tradingHours.some((e: TradingHour) => e.from <= now && e.to >= now)
      };
    });
  }

  constructor() {
    super();

    this.items = this.ToTableItems(INSTRUMENT_MOCK_DATA);
  }

  getData(params: object): PaginationInterface<InstrumentItem> {
    console.log('Params', params);
    return this.getTableData(params);
  }
}
