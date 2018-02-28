import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'in-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {

  currentDate = Date.now();

  constructor() { }

  ngOnInit() {
  }

}
