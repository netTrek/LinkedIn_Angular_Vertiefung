import { Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';

@Component ( {
  selector   : 'in-user-name',
  templateUrl: './user-name.component.html',
  styleUrls  : [ './user-name.component.scss' ]
} )
export class UserNameComponent implements OnInit {

  @Output ()
  selectUsr: EventEmitter<string> = new EventEmitter ();

  get name (): string {
    return this._name;
  }

  @Input ()
  set name ( value: string ) {
    if ( value.trim () !== '' ) {
      this._name      = value;
    }
  }

  private _name = 'Saban Ünlü';

  @Input()
  @HostBinding ( 'class.user-name' )
  isSelected = false;

  constructor () {
  }

  ngOnInit () {
  }

  @HostListener ( 'click' )
  selectUser () {
    this.selectUsr.emit ( this.name );
  }
}
