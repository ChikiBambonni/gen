import { ApiType } from '@core/enums/api-url-type.enum';
import { InstrumentsMocks } from './mocks/instruments/instruments.class';
import { MockBackendUrl } from './mock-backend-url.class';

const UrlsConfig = {
  [ApiType.InstrumentAPI]: {
    '/instruments': new InstrumentsMocks()
  }
};

export const MockBackendConfig: MockBackendUrl = new MockBackendUrl(UrlsConfig);

export const defaultMockDelay = 400;
