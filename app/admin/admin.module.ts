import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ManageRoleComponent } from './manage-role/manage-role.component';
import { ManageClaimComponent } from './manage-claim/manage-claim.component';

import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    ManageUserComponent,
    ManageRoleComponent,
    ManageClaimComponent
  ]
})
export class AdminModule {}
