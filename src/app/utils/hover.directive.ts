import { Directive } from '@angular/core';

@Directive ( {
  selector: '[inHover]'
} )
export class HoverDirective {

  constructor () {
    console.log ( 'inHover' );
  }

}
