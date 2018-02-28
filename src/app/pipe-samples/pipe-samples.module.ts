import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LowercaseComponent } from './lowercase/lowercase.component';
import { CurrencyComponent } from './currency/currency.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LowercaseComponent, CurrencyComponent],
  exports: [LowercaseComponent, CurrencyComponent]
})
export class PipeSamplesModule { }
