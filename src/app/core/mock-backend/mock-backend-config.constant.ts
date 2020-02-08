import { ApiType } from '@core/enums/api-url-type.enum';
import { InstrumentsMocks } from './mocks/instruments/instruments.class';
import { MockBackendUrl } from './mock-backend-url.class';
import { HailstoneMocks } from './mocks/hailstone/hailstone.class';

const UrlsConfig = {
  [ApiType.InstrumentAPI]: {
    '/instruments': new InstrumentsMocks(),
    '/hailstone': new HailstoneMocks()
  }
};

export const MockBackendConfig: MockBackendUrl = new MockBackendUrl(UrlsConfig);

export const defaultMockDelay = 400;
