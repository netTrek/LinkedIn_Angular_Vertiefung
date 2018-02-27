import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component ( {
  selector: 'in-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: [ './user-list.component.scss' ],
  encapsulation: ViewEncapsulation.Emulated
})
export class UserListComponent implements OnInit{

  users: string[] = [
    'Frank Müller',
    'Peter Mustermann',
    'Saban Ünlü'
  ];

  selectedUsrName: string;

  constructor() { }
  ngOnInit() {  }

  onSelectedUsr ( selectedUsrName: string ) {
    this.selectedUsrName = selectedUsrName;
  }
}
