import { Injectable, Injector } from '@angular/core';

@Injectable()
export class LoginService {

  constructor( injector: Injector ) {
    console.log ( injector );
  }

}
