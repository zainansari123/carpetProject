import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { UserManagementComponent } from './user-management/user-management.component';

@NgModule({
  declarations: [ProfileComponent, UserManagementComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
