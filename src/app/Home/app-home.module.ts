import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
//import { AlertModule } from 'ngx-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './app-home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //AlertModule.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
