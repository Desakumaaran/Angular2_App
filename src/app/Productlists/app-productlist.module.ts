import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';

import { FormsModule }   from '@angular/forms';
//import { AlertModule } from 'ngx-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProductlistComponent } from './app-productlist.component';

@NgModule({
  declarations: [
    ProductlistComponent
  ],
  imports: [
    BrowserModule,
      CommonModule,
    // FormsModule,
    //AlertModule.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [],
  //bootstrap: [ProductlistComponent]
})
export class ProductlistModule { }
