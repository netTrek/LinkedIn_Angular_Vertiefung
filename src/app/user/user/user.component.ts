import { Component, Host, Inject, OnInit, Optional, Self } from '@angular/core';
import { AppModelService } from '../../app-model.service';
import { LoginService } from '../login.service';
import { IUseMe } from '../../iuse-me';
import { USER_TOKEN } from '../../user-token';
import { AppComponent } from '../../app.component';

@Component ( {
  selector   : 'in-user',
  templateUrl: './user.component.html',
  styleUrls  : [ './user.component.scss' ],
  providers: [
    {provide: USER_TOKEN, useValue: 'Danke!!!'}
  ]
} )
export class UserComponent implements OnInit {
  constructor ( public appModel: AppModelService,
                @Inject ('useMe') useMe: IUseMe[],
                @Inject ('useExist') useExist: any[],
                @Inject ('mixed') mixed: any[],
                @Inject ( USER_TOKEN ) user: string,
                @Optional() @Host() @Inject ( USER_TOKEN ) userhost: string,
                @Host() parent: AppComponent,
                @Optional() @Self() @Inject ( USER_TOKEN ) userself: string,
                login: LoginService ) {
    console.log ( 'userself', userself);
  }

  ngOnInit () {
  }
}
