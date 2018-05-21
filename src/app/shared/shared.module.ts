import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {LandingComponent} from '../landing/landing.component';
import {SignInComponent} from '../landing/sign-in/sign-in.component';
import {SignUpComponent} from '../landing/sign-up/sign-up.component';
import {HeaderComponent} from '../landing/header/header.component';


@NgModule({
  imports: [],
  exports: [
    LandingComponent,
    SignInComponent,
    SignUpComponent,
    HeaderComponent
  ],
  declarations: [
    LandingComponent,
    SignInComponent,
    SignUpComponent,
    HeaderComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule { }
