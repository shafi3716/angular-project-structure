import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardSidenavComponent } from './dashboard-sidenav.component';
import { MatModule } from 'src/app/mat.module';



@NgModule({
  declarations: [DashboardSidenavComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatModule
  ],
  exports: [DashboardSidenavComponent]
})
export class DashboardSidenavModule { }
