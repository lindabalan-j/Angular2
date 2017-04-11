import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.route';
import {DashComponent} from './Dash'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashComponent
    // ,
    // AppRoutingModule
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})


export class AppModule { }
