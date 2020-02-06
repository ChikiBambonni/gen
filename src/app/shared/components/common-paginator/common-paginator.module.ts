import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@material/material.module';
import { CommonPaginatorComponent } from './common-paginator.component';

@NgModule({
  declarations: [
    CommonPaginatorComponent
  ],
  exports: [
    CommonPaginatorComponent
  ],
  imports: [
    MaterialModule,
    CommonModule
  ]
})
export class CommonPaginatorModule { }
