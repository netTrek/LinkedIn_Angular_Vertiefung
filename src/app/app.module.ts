import { BrowserModule } from '@angular/platform-browser';
import { ClassProvider, NgModule, ValueProvider } from '@angular/core';

import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { AppModelService } from './app-model.service';
import { IUseMe } from './iuse-me';
import { ExistingProvider } from '@angular/core/src/di/provider';

class UseMe implements IUseMe {
  val = 123;
}

class UseMe2 implements IUseMe {
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
    <ExistingProvider>{provide: 'useExist', useExisting: 'user', multi: true}
  ],
  bootstrap   : [ AppComponent ]
} )
export class AppModule {
}
