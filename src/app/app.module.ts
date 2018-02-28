import { BrowserModule } from '@angular/platform-browser';
import { ClassProvider, FactoryProvider, NgModule, ValueProvider } from '@angular/core';

import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { AppModelService } from './app-model.service';
import { IUseMe } from './iuse-me';
import { ExistingProvider } from '@angular/core/src/di/provider';

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
    <ValueProvider>{provide: 'user', useValue: 'Saban Ünlü'},
    <ClassProvider>{provide: 'useMe', useClass: UseMe, multi: true},
    <ClassProvider>{provide: 'useMe', useClass: UseMe2, multi: true},
    <ExistingProvider>{provide: 'useExist', useExisting: 'useMe', multi: true},
    <ExistingProvider>{provide: 'useExist', useExisting: 'user', multi: true},
    <FactoryProvider>{provide: 'mixed', deps: ['user'], useFactory: ( usr: string ) => {
      return `factory return ${usr}`;
      }}
  ],
  bootstrap   : [ AppComponent ]
} )
export class AppModule {
}
