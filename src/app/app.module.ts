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
  MatCardModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatListModule, MatSortModule, MatTableModule
} from '@angular/material';
import {DeviceAddingComponent} from './logged-in/content/device-adding/device-adding.component';
import {DeviceManagmentComponent} from './logged-in/content/device-managment/device-managment.component';
import {GroupAddingComponent} from './logged-in/content/group-adding/group-adding.component';
import {GroupManagmentComponent} from './logged-in/content/group-managment/group-managment.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptorService} from './core/services/auth-interceptor/auth-interceptor.service';
import { DeviceComponent } from './logged-in/content/device-managment/device/device.component';
import { GroupComponent } from './logged-in/content/group-managment/group/group.component';
import { GroupUsersPipe } from './logged-in/content/group-managment/group/group-users-pipe/group-users.pipe';
import { FileAddingComponent } from './logged-in/content/file-adding/file-adding.component';
import { UploadFileToDeviceComponent } from './logged-in/content/upload-file-to-device/upload-file-to-device.component';
import { UploadFileToDeviceListRowComponent } from './logged-in/content/upload-file-to-device/upload-file-to-device-list-row/upload-file-to-device-list-row.component';
import { UploadFileToGroupComponent } from './logged-in/content/upload-file-to-group/upload-file-to-group.component';
import { UploadFileToGroupListRowComponent } from './logged-in/content/upload-file-to-group/upload-file-to-group-list-row/upload-file-to-group-list-row.component';
import {GrowlModule} from 'ngx-growl';


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
    DeviceComponent,
    GroupComponent,
    GroupUsersPipe,
    FileAddingComponent,
    UploadFileToDeviceComponent,
    UploadFileToDeviceListRowComponent,
    UploadFileToGroupComponent,
    UploadFileToGroupListRowComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    GrowlModule.forRoot({maxMessages: 5, displayTimeMs: 5000}),
    LoggerModule.forRoot({level: NgxLoggerLevel.DEBUG}),
    MDBBootstrapModule.forRoot(),
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSortModule,
    MatTableModule,
    MatDividerModule,
    MatListModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
