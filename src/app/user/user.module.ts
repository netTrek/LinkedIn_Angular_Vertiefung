import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserNameComponent } from './user-name/user-name.component';
import { PipeSamplesModule } from '../pipe-samples/pipe-samples.module';

@NgModule({
  imports: [
    CommonModule,
    PipeSamplesModule
  ],
  declarations: [UserComponent, UserListComponent, UserNameComponent],
  exports: [UserComponent]
})
export class UserModule { }
