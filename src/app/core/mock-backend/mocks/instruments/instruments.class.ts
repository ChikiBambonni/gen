import { PaginationInterface } from '@core/interfaces/pagination.interface';
import { MockBackendFactory } from '@core/mock-backend/mock-backend.class';
import { InstrumentStat, TradingHour, InstrumentItem } from '@core/interfaces/data.interfaces';
import { INSTRUMENT_MOCK_DATA } from './instruments.constants';

export class InstrumentsMocks extends MockBackendFactory<InstrumentItem> {

  private getOpenOnly(items: InstrumentItem[]): InstrumentItem[] {
    return items.filter((element: InstrumentItem) => element.isOpen);
  }

  private ToTableItems(items: InstrumentStat[]): InstrumentItem[] {
    const now = +new Date();

    return items.map((element: InstrumentStat) => {
      return {
        instrumentID: element.instrumentID,
        name: element.name,
        isOpen: element.tradingHours.some((e: TradingHour) => e.from <= now && e.to >= now)
      };
    });
  }

  constructor() {
    super();
  }

  getData(params: any): PaginationInterface<InstrumentItem> {
    this.items = this.ToTableItems(INSTRUMENT_MOCK_DATA);
    this.items = params.openOnly ? this.getOpenOnly(this.items) : this.items;

    return this.getTableData(params);
  }
}
