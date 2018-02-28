import { BrowserModule } from '@angular/platform-browser';
import { ClassProvider, FactoryProvider, LOCALE_ID, NgModule, ValueProvider } from '@angular/core';

import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { AppModelService } from './app-model.service';
import { IUseMe } from './iuse-me';
import { ExistingProvider } from '@angular/core/src/di/provider';
import { USER_TOKEN } from './user-token';


import localeDe from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';
registerLocaleData( localeDe, 'de' );

// export nur für AOT notwending
export class UseMe implements IUseMe {
  val = 123;
}
// export nur für AOT notwending
export class UseMe2 implements IUseMe {
  val = 456;
}


@NgModule ( {
  declarations: [
    AppComponent
  ],
  imports     : [
    BrowserModule,
    UserModule
  ],
  providers   : [
    AppModelService,
    <ValueProvider>{provide: USER_TOKEN, useValue: 'Saban Ünlü'},
    <ClassProvider>{provide: 'useMe', useClass: UseMe, multi: true},
    <ClassProvider>{provide: 'useMe', useClass: UseMe2, multi: true},
    <ExistingProvider>{provide: 'useExist', useExisting: 'useMe', multi: true},
    <ExistingProvider>{provide: 'useExist', useExisting: USER_TOKEN, multi: true},
    <FactoryProvider>{provide: 'mixed', deps: [USER_TOKEN], useFactory: ( usr: string ) => {
      return `factory return ${usr}`;
      }},
    {provide: LOCALE_ID, useValue: 'de'}
  ],
  bootstrap   : [ AppComponent ]
} )
export class AppModule {
}
