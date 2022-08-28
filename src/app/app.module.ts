import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogoAddressComponent } from './header/logo-address/logo-address.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAddressComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
