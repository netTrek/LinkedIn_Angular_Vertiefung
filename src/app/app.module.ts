import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { PipeSamplesModule } from './pipe-samples/pipe-samples.module';

import localeDe from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';

registerLocaleData ( localeDe, 'de' );

@NgModule ( {
  declarations: [
    AppComponent
  ],
  imports     : [
    BrowserModule,
    UserModule,
    PipeSamplesModule
  ],
  providers   : [
    { provide: LOCALE_ID, useValue: 'de' }
  ],
  bootstrap   : [ AppComponent ]
} )
export class AppModule {
}
