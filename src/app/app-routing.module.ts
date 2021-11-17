import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'admin-portal',
    loadChildren: () =>
          import('@components/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'user-portal',
    loadChildren: () => import('@components/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: '',
    redirectTo: '/user-portal',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
