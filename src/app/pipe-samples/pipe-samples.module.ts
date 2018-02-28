import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LowercaseComponent } from './lowercase/lowercase.component';
import { CurrencyComponent } from './currency/currency.component';
import { DecimalComponent } from './decimal/decimal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LowercaseComponent, CurrencyComponent, DecimalComponent],
  exports: [LowercaseComponent, CurrencyComponent, DecimalComponent]
})
export class PipeSamplesModule { }
