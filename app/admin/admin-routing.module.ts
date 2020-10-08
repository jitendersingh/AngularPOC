import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ManageRoleComponent } from './manage-role/manage-role.component';
import { ManageClaimComponent } from './manage-claim/manage-claim.component';

import { AuthGuard } from '../auth/auth.guard';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'manage-user', component: ManageUserComponent },
          { path: 'manage-role', component: ManageRoleComponent },
          { path: 'manage-claim', component: ManageClaimComponent },
          { path: '', component: AdminDashboardComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}
