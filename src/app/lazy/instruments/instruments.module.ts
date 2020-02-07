import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@material/material.module';
import { CommonPaginatorModule } from '@shared/components/common-paginator/common-paginator.module';
import { CommonTableModule } from '@shared/components/common-table/common-table.module';
import { ErrorMessageModule } from '@shared/components/error-message/error-message.module';
import { CommonSpinnerModule } from '@shared/components/common-spinner/common-spinner.module';
import { HeaderModule } from '@shared/components/header/header.module';
import { InstrumentsComponent } from './instruments.component';
import { InstrumentsRoutingModule } from './instruments-routing.module';

@NgModule({
  declarations: [
    InstrumentsComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    InstrumentsRoutingModule,
    HeaderModule,
    CommonTableModule,
    CommonPaginatorModule,
    CommonSpinnerModule,
    ErrorMessageModule
  ]
})
export class InstrumentsModule { }
