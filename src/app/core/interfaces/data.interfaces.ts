export interface TradingHour {
  from: number;
  to: number;
}

export interface Instrument {
  instrumentID: number;
  name: string;
}

export interface InstrumentStat extends Instrument {
  tradingHours: TradingHour[];
}

export interface InstrumentItem extends Instrument {
  isOpen: boolean;
}
