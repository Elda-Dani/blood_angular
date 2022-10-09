import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DonaraddComponent } from './donaradd/donaradd.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchdonorComponent } from './searchdonor/searchdonor.component';

@NgModule({
  declarations: [
    AppComponent,
    DonaraddComponent,
    NavbarComponent,
    SearchdonorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
