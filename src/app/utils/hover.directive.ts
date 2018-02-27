import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive ( {
  selector: '[inHover]'
} )
export class HoverDirective implements OnInit{

  get inHover (): string {
    return this._inHover;
  }
  @Input()
  set inHover ( value: string ) {
    if ( value.trim() !== '' ) {
      this._inHover = value;
      this.renderer.setStyle( this.elem.nativeElement , 'color', this._inHover);
    }
  }


  private _inHover: string;

  constructor ( private elem: ElementRef, private renderer: Renderer2 ) {
  }

  ngOnInit (): void {
    if ( this._inHover === undefined ) {
      this.renderer.setStyle( this.elem.nativeElement , 'color', 'red');
    }
  }

}
