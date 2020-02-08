import { HttpParams } from '@angular/common/http';

import { Safe } from '@core/decorators/safe.decorator';

export abstract class HttpUtils {

  @Safe({ returnValue: null })
  protected getRequestParams(params: object | null): HttpParams {
    let requestParams: HttpParams = new HttpParams();

    if (params) {
      Object.keys(params)
        .filter((key: string) => params[key] !== undefined && params[key] !== null)
        .forEach((key: string) => requestParams = this.updateParams(requestParams, key, params[key]));
    }

    return requestParams;
  }

  protected updateParams(base: HttpParams, key: string, value: string): HttpParams {
    return base.set(key, value);
  }
}
