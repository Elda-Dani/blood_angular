import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DonaraddComponent } from './donaradd/donaradd.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchdonorComponent } from './searchdonor/searchdonor.component';
import { DeletedonorComponent } from './deletedonor/deletedonor.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewallComponent } from './viewall/viewall.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes:Routes=[
{

  path:"", component:DonaraddComponent
},

{
  path:"search",component:SearchdonorComponent
},
{
  path:"delete",component:DeletedonorComponent
},
{
  path:"viewall",component:ViewallComponent
}


]
@NgModule({
  declarations: [
    AppComponent,
    DonaraddComponent,
    NavbarComponent,
    SearchdonorComponent,
    DeletedonorComponent,
    ViewallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
