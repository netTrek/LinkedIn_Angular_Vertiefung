import { Component } from '@angular/core';

@Component ( {
  selector   : 'in-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
} )
export class AppComponent {

  counter = 0;

  title        = 'in';
  showUserInfo = true;

  class2bind = 'class-name-1 class-name-2 class-name-3';

}
