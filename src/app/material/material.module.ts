import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  exports: [
    MatTableModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatCardModule
  ],
})
export class MaterialModule { }
