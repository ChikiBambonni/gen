import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@material/material.module';
import { CommonSpinnerComponent } from './common-spinner.component';

@NgModule({
  declarations: [
    CommonSpinnerComponent
  ],
  exports: [
    CommonSpinnerComponent
  ],
  imports: [
    MaterialModule,
    CommonModule
  ]
})
export class CommonSpinnerModule { }
