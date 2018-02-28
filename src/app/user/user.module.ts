import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserNameComponent } from './user-name/user-name.component';
import { LoginService } from './login.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [ LoginService ],
  declarations: [UserComponent, UserListComponent, UserNameComponent],
  exports: [UserComponent]
})
export class UserModule { }
