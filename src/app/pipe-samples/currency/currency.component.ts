import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'in-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {

  price = 123456789.45678;

  constructor() { }

  ngOnInit() {
  }

}
