import { BrowserModule } from '@angular/platform-browser';
import { ClassProvider, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { AppModelService } from './app-model.service';
import { IUseMe } from './iuse-me';

export class UseMe implements IUseMe {
  val = 123;
}

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
    <ClassProvider>{provide: 'useMe', useClass: UseMe, multi: true},
    <ClassProvider>{provide: 'useMe', useClass: UseMe2, multi: true}
  ],
  bootstrap   : [ AppComponent ]
} )
export class AppModule {
}
