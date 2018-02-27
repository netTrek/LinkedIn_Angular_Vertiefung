import { Component } from '@angular/core';

@Component ( {
  selector   : 'in-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
} )
export class AppComponent {

  title = 'in';

  fontColor = 'red';
  // fontSize  = .75;

  styleObj = {
    'color'    : 'red',
    'font-size': '.75em'
  };

}
