export interface TradingHour {
  from: number;
  to: number;
}

export interface Instrument {
  instrumentID: number;
  name: string;
  tradingHours: TradingHour[];
}
