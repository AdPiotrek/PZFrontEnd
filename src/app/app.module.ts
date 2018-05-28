import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {HeaderComponent} from './landing/header/header.component';
import {LandingComponent} from './landing/landing.component';
import {SignInComponent} from './landing/sign-in/sign-in.component';
import {SignUpComponent} from './landing/sign-up/sign-up.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TestingDirective} from './testing.directive';
import {LoggerModule, NgxLoggerLevel} from 'ngx-logger';
import {AppRoutingModule} from './app-routing.module';
import {LoggedInComponent} from './logged-in/logged-in.component';
import {SidebarComponent} from './logged-in/sidebar/sidebar.component';
import {LoggedInHeaderComponent} from './logged-in/logged-in-header/logged-in-header.component';
import {
  MatCardModule, MatFormFieldModule, MatInputModule, MatSortModule, MatTableModule
} from '@angular/material';
import {DeviceAddingComponent} from './logged-in/content/device-adding/device-adding.component';
import {DeviceManagmentComponent} from './logged-in/content/device-managment/device-managment.component';
import {GroupAddingComponent} from './logged-in/content/group-adding/group-adding.component';
import {GroupManagmentComponent} from './logged-in/content/group-managment/group-managment.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    SignInComponent,
    SignUpComponent,
    TestingDirective,
    LoggedInComponent,
    SidebarComponent,
    LoggedInHeaderComponent,
    DeviceAddingComponent,
    DeviceManagmentComponent,
    GroupAddingComponent,
    GroupManagmentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    LoggerModule.forRoot({level: NgxLoggerLevel.DEBUG}),
    MDBBootstrapModule.forRoot(),
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSortModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
