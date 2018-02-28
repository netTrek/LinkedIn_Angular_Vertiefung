import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { AppModelService } from './app-model.service';

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
    { provide: 'username', useValue: 'Saban Ünlü'},
    { provide: 'users', useValue: 'Peter', multi: true },
    { provide: 'users', useValue: 'Hans', multi: true },
    { provide: 'users', useValue: 'Frank', multi: true }
  ],
  bootstrap   : [ AppComponent ]
} )
export class AppModule {
}
