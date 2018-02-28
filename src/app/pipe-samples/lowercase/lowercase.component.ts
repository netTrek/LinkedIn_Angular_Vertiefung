import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'in-lowercase',
  templateUrl: './lowercase.component.html',
  styleUrls: ['./lowercase.component.scss']
})
export class LowercaseComponent implements OnInit {

  sampleText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet at commodi, dolore ea earum illo, illum laborum magnam minima modi mollitia neque nesciunt nobis non perferendis quis repellat sapiente?`

  constructor() { }

  ngOnInit() {
  }

}
