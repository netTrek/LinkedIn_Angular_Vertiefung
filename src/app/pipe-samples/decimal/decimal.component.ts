import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'in-decimal',
  templateUrl: './decimal.component.html',
  styleUrls: ['./decimal.component.scss']
})
export class DecimalComponent implements OnInit {

  pi = Math.PI;

  constructor() { }

  ngOnInit() {
  }

}
