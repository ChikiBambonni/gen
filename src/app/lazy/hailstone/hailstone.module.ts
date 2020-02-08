import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HailstoneComponent } from './hailstone.component';
import { HailstoneRoutingModule } from './hailstone-routing.module';

@NgModule({
  declarations: [
    HailstoneComponent,
  ],
  imports: [
    CommonModule,
    HailstoneRoutingModule
  ]
})
export class HailstoneModule { }
