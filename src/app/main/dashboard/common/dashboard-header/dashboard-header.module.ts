import { RouterModule } from '@angular/router';
import { MatModule } from 'src/app/mat.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHeaderComponent } from './dashboard-header.component';



@NgModule({
  declarations: [DashboardHeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatModule
  ],
  exports: [DashboardHeaderComponent]
})
export class DashboardHeaderModule { }
