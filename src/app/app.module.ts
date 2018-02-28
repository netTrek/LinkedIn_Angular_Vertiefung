import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { PipeSamplesModule } from './pipe-samples/pipe-samples.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UserModule,
    PipeSamplesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
