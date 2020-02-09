import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoDataMessageComponent } from './no-data-message.component';

@NgModule({
  declarations: [
    NoDataMessageComponent
  ],
  exports: [
    NoDataMessageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NoDataMessageModule { }
