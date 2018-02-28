import { Pipe, PipeTransform } from '@angular/core';

@Pipe ( {
  name: 'echo'
} )
export class EchoPipe implements PipeTransform {

  transform ( value: any, ...args: any[] ): any {
    console.log ( 'outpu ', value );
    return value;
  }

}
