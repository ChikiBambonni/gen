import { ErrorResponse } from '@core/interfaces/http.interfaces';

export abstract class DataComponent {

  error: ErrorResponse;
  isLoading = true;

  constructor() {}
}
