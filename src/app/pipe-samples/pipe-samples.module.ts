import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LowercaseComponent } from './lowercase/lowercase.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LowercaseComponent],
  exports: [LowercaseComponent]
})
export class PipeSamplesModule { }
