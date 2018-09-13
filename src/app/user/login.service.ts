import { Injectable, Injector } from '@angular/core';
import { AppModelService } from '../app-model.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( appModel: AppModelService, userService: UserService ) {
    console.log ( appModel, userService );
  }

}
