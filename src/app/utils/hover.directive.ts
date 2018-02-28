import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive ( {
  selector: '[inHover]'
} )
export class HoverDirective implements OnInit {

  get inHover (): string {
    return this._inHover;
  }

  @Input ()
  set inHover ( value: string ) {
    if ( value.trim () !== '' ) {
      this._inHover = value;
    }
  }

  private _inHover: string;

  @HostBinding('style.color')
  color: string|null = null;

  constructor () {  }

  @HostListener ( 'mouseenter' )
  enter () {
    this.color = this.inHover;
  }

  @HostListener ( 'mouseleave' )
  leave () {
    this.color = null;
  }

  ngOnInit (): void {
    if ( this._inHover === undefined ) {
      this.inHover = 'red';
    }
  }

}
