import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstrumentsComponent } from './instruments.component';
import { InstrumentsRoutingModule } from './instruments-routing.module';

@NgModule({
  declarations: [
    InstrumentsComponent,
  ],
  imports: [
    CommonModule,
    InstrumentsRoutingModule
  ]
})
export class InstrumentsModule { }
