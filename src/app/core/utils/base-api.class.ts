import { HttpErrorResponse } from '@angular/common/http';

import { BackendHttpError, ErrorResponse, ComponentResponse } from '@core/interfaces/http.interfaces';
import { Safe } from '@core/decorators/safe.decorator';
import { HttpUtils } from './http-utils.class';

export abstract class BaseApi extends HttpUtils {

  @Safe({ returnValue: null })
  protected parseError(e: HttpErrorResponse): BackendHttpError {
    return JSON.parse(e.error);
  }

  protected getHttpFetchError(response: HttpErrorResponse): ErrorResponse {
    return {
      errorCode: 1,
      errorMessage: 'Error while fetching.',
      body: this.parseError(response)
    };
  }

  protected getSuccessBody<T>(body: T): ComponentResponse<T> {
    return {
      value: body,
      error: null
    };
  }

  protected getErrorBody<T>(response: HttpErrorResponse): ComponentResponse<T> {
    return {
      value: null,
      error: this.getHttpFetchError(response)
    };
  }
}
