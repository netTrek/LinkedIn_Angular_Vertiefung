import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserNameComponent } from './user-name/user-name.component';
import { HoverDirective } from './hover.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserComponent, UserListComponent, UserNameComponent, HoverDirective],
  exports: [UserComponent, HoverDirective]
})
export class UserModule { }
