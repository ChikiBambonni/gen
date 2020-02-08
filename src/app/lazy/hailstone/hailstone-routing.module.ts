import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HailstoneComponent } from './hailstone.component';

const routes: Routes = [{
    path: '',
    component: HailstoneComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HailstoneRoutingModule { }
