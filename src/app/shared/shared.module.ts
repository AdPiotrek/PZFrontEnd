import { NgModule } from '@angular/core';
import {LandingComponent} from '../landing/landing.component';
import {SignInComponent} from '../landing/sign-in/sign-in.component';
import {SignUpComponent} from '../landing/sign-up/sign-up.component';

@NgModule({
  imports: [
    LandingComponent,
    SignInComponent,
    SignUpComponent
  ],
  exports: [
    LandingComponent,
    SignInComponent,
    SignUpComponent
  ],
  declarations: []
})
export class SharedModule { }
