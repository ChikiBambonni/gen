import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '@material/material.module';
import { ErrorMessageModule } from '@shared/components/error-message/error-message.module';
import { CommonSpinnerModule } from '@shared/components/common-spinner/common-spinner.module';
import { HailstoneComponent } from './hailstone.component';
import { HailstoneRoutingModule } from './hailstone-routing.module';

@NgModule({
  declarations: [
    HailstoneComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    HailstoneRoutingModule,
    CommonSpinnerModule,
    ErrorMessageModule
  ]
})
export class HailstoneModule { }
