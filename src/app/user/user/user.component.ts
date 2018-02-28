import { Component, Inject, OnInit } from '@angular/core';
import { AppModelService } from '../../app-model.service';
import { LoginService } from '../login.service';
import { IUseMe } from '../../iuse-me';

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
                login: LoginService ) {
    console.log ( 'mixed', mixed );
  }

  ngOnInit () {
  }
}
