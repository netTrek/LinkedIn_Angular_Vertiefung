import { Component, Inject, OnInit } from '@angular/core';
import { AppModelService } from '../../app-model.service';
import { LoginService } from '../login.service';
import { IUseMe } from '../../iuse-me';
import { USER_TOKEN } from '../../user-token';

@Component ( {
  selector   : 'in-user',
  templateUrl: './user.component.html',
  styleUrls  : [ './user.component.scss' ]
} )
export class UserComponent implements OnInit {
  constructor ( public appModel: AppModelService,
                @Inject ('useMe') useMe: IUseMe[],
                @Inject ('useExist') useExist: any[],
                @Inject ('mixed') mixed: any[],
                @Inject ( USER_TOKEN ) user: string,
                login: LoginService ) {
    console.log ( 'user', user);
  }

  ngOnInit () {
  }
}
