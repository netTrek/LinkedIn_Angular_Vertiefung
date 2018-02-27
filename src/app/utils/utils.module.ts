import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverDirective } from './hover.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HoverDirective],
  exports: [HoverDirective]
})
export class UtilsModule { }
