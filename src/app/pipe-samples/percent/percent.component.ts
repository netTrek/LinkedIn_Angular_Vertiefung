import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'in-percent',
  templateUrl: './percent.component.html',
  styleUrls: ['./percent.component.scss']
})
export class PercentComponent implements OnInit {

  val1 = 0.349;
  val2 = 1.12345;

  constructor() { }

  ngOnInit() {
  }

}
