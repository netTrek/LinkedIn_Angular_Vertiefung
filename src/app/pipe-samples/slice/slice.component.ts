import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'in-slice',
  templateUrl: './slice.component.html',
  styleUrls: ['./slice.component.scss']
})
export class SliceComponent implements OnInit {


  value = '0123456789';

  constructor() { }

  ngOnInit() {
  }

}
