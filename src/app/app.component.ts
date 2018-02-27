import { Component } from '@angular/core';

@Component({
  selector: 'in-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  company = 'linkedin';

  title = 'in';
  showUserInfo = true;


  constructor() {

    switch ( this.company ) {
      case 'github':
        console.log ( 'github' );
        break;
      case 'netTrek':
        console.log ( 'netTrek' );
        break;
      default:
        console.log ( 'linkedin' );
        break;
    }

  }
}
