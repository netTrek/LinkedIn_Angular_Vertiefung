import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserNameComponent } from './user-name/user-name.component';
import { RoleDirective } from './role.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserComponent, UserListComponent, UserNameComponent, RoleDirective],
  exports: [UserComponent, RoleDirective]
})
export class UserModule { }
