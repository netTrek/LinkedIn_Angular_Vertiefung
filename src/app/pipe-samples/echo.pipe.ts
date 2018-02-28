import { Pipe, PipeTransform } from '@angular/core';

@Pipe ( {
  name: 'echo',
  pure: false
} )
export class EchoPipe implements PipeTransform {

  transform ( value: any, ...args: any[] ): any {
    console.log ( 'output ', value );
    return value;
  }

}
