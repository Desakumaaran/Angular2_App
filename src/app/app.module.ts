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
import { ProductlistModule }         from './Productlists/app-productlist.module';

import { HomeComponent } from './Home/app-home.component';
import { ProductlistComponent } from './Productlists/app-productlist.component';

//import { ComposeMessageComponent } from './compose-message.component';
//import { LoginRoutingModule }      from './login-routing.module';
//import { LoginComponent }          from './login.component';
//import { PageNotFoundComponent }   from './not-found.component';

//import { DialogService }           from './dialog.service';


@NgModule({
  declarations: [
    AppComponent,
      HomeComponent,
      ProductlistComponent
    
  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
      HomeModule,
      ProductlistModule,
     NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
