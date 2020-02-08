import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
    path: '',
    redirectTo: '/instruments',
    pathMatch: 'full'
  }, {
    path: 'instruments',
    loadChildren: () => import('./lazy/instruments/instruments.module').then(mod => mod.InstrumentsModule),
  }, {
    path: 'hailstone',
    loadChildren: () => import('./lazy/hailstone/hailstone.module').then(mod => mod.HailstoneModule)
  }, {
    path: '**',
    redirectTo: '/instruments',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
