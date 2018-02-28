import { Component, OnInit } from '@angular/core';

@Component ( {
  selector   : 'in-json',
  templateUrl: './json.component.html',
  styleUrls  : [ './json.component.scss' ]
} )
export class JsonComponent implements OnInit {

  user: any = {
    name  : 'saban',
    age   : 44,
    adress: {
      city: 'dorsten'
    }
  };

  constructor () {
  }

  ngOnInit () {
  }

}
