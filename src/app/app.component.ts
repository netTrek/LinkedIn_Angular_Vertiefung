import { Component } from '@angular/core';
import { AppModelService } from './app-model.service';
import { LoginService } from './user/login.service';

@Component ( {
  selector   : 'in-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
} )
export class AppComponent {

  title        = 'in';
  showUserInfo = true;

  class2bind = 'class-name-1 class-name-2 class-name-3';

  constructor ( public appModel: AppModelService, login: LoginService ) {
    console.log ( appModel, login );
  }

  increment () {
    this.appModel.counter ++;
  }

}
