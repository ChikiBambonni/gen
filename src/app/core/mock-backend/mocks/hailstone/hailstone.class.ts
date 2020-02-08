import { MockBackendFactory } from '@core/mock-backend/mock-backend.class';
import { Hailstone } from '@core/interfaces/data.interfaces';
import { HailstoneUtils } from '@core/utils/hailstone.utils';

export class HailstoneMocks extends MockBackendFactory<Hailstone> {

  constructor() {
    super();
  }

  getData(params: any): Hailstone {
    const series = HailstoneUtils.getHailstoneSeries(params.a);
    return {
      series,
      totalStoppingTime: series.length - 1
    };
  }
}
