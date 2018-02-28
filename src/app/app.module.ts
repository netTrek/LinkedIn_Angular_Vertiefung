import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { AppModelService } from './app-model.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UserModule
  ],
  providers: [ AppModelService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
