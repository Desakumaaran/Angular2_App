import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import { AlertModule } from 'ngx-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { Router } from '@angular/router';


import { AppRoutingModule }          from './app-routing.module';

import { AppComponent } from './app.component';

import { HomeModule }                from './Home/app-home.module';
import { ProductlistModule }                from './Productlists/app-productlist.module';
//import { ComposeMessageComponent } from './compose-message.component';
//import { LoginRoutingModule }      from './login-routing.module';
//import { LoginComponent }          from './login.component';
//import { PageNotFoundComponent }   from './not-found.component';

//import { DialogService }           from './dialog.service';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
      HomeModule,
      ProductlistModule,
      
    //FormsModule,
    //AlertModule.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
