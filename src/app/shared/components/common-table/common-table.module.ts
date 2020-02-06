import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@material/material.module';
import { CommonTableComponent } from './common-table.component';
import { CommonSpinnerModule } from '../common-spinner/common-spinner.module';

@NgModule({
  declarations: [
    CommonTableComponent
  ],
  exports: [
    CommonTableComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    CommonSpinnerModule
  ]
})
export class CommonTableModule { }
