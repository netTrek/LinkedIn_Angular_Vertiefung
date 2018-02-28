import { Pipe, PipeTransform } from '@angular/core';
import { isArray } from 'rxjs/util/isArray';

@Pipe ( {
  name: 'revers'
} )
export class ReversPipe implements PipeTransform {

  transform ( value: string | any[], logs: boolean = false ): string | any[] {
    if ( logs === true ) {
      console.log ( 'reversePipe input', value );
    }

    if ( isArray ( value ) ) {
      return value.reverse ();
    }

    return value.split ( '' )
                .reverse ()
                .join ( '' );
  }

}
