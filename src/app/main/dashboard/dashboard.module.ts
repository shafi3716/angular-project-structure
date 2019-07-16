import { DashboardFooterModule } from './common/dashboard-footer/dashboard-footer.module';
import { DashboardHeaderModule } from './common/dashboard-header/dashboard-header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardSidenavModule } from './common/dashboard-sidenav/dashboard-sidenav.module';
import { MatModule } from 'src/app/mat.module';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./main-page/main-page.module').then(mod => mod.MainPageModule)
      }
    ]
  }
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatModule,
    DashboardHeaderModule,
    DashboardFooterModule,
    DashboardSidenavModule
  ]
})
export class DashboardModule { }