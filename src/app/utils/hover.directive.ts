import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive ( {
  selector: '[inHover]'
} )
export class HoverDirective {

  constructor ( elem: ElementRef, renderer: Renderer2 ) {
    console.log ( 'inHover' , elem );
    // elem.nativeElement.style.color = 'red';
    renderer.setStyle( elem.nativeElement , 'color', 'red');
  }

}
