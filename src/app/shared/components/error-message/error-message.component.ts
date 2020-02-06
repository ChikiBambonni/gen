import { Component, OnInit, Input } from '@angular/core';

import { ErrorResponse } from '@core/interfaces/http.interfaces';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {

  @Input()
  error: ErrorResponse;

  constructor() { }

  ngOnInit() {
  }

}
