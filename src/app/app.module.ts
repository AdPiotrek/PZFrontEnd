import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { HeaderComponent } from './landing/header/header.component';
import {LandingComponent} from './landing/landing.component';
import {SignInComponent} from './landing/sign-in/sign-in.component';
import {SignUpComponent} from './landing/sign-up/sign-up.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TestingDirective } from './testing.directive';
import {LoggerModule, NgxLoggerLevel} from "ngx-logger";
import {AppRoutingModule} from "./app-routing.module";
import { LoggedInComponent } from './logged-in/logged-in.component';
import { SidebarComponent } from './logged-in/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    SignInComponent,
    SignUpComponent,
    TestingDirective,
    LoggedInComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    LoggerModule.forRoot({level: NgxLoggerLevel.OFF}),
    MDBBootstrapModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
