import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {User} from '../user';

@Component ( {
  selector: 'in-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: [ './user-list.component.scss' ],
  encapsulation: ViewEncapsulation.Emulated
})
export class UserListComponent implements OnInit{

  users: User[] = [
    { name: 'Frank Müller', age: 12},
    { name: 'Hans Müller', age: 13},
    { name: 'Peter Müller', age: 14},
    { name: 'Paul Müller', age: 15}
  ];

  selectedUsrName: string;

  constructor() { }
  ngOnInit() {  }

  onSelectedUsr ( selectedUsrName: string ) {
    this.selectedUsrName = selectedUsrName;
  }
}
