import { Component } from '@angular/core';

@Component({
  selector: 'in-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showImg = true;
  title = 'in';

  toggle() {
    this.showImg = !this.showImg;
  }
}
