import { ErrorResponse } from '@core/interfaces/http.interfaces';

export abstract class DataComponent {

  error: ErrorResponse;
  isLoading: boolean = true;
  noDataToDisplay: boolean = false;

  constructor() {}
}
