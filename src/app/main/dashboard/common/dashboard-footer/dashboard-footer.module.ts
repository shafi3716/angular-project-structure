import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardFooterComponent } from './dashboard-footer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [DashboardFooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [DashboardFooterComponent]
})
export class DashboardFooterModule { }
