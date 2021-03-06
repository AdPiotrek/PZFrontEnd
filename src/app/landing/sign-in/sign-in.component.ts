import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TestingDirective} from '../../testing.directive';
import {AuthService} from '../../core/services/auth/auth.service';
import {SignInRequest} from '../../shared/models/sign-in-request';
import {NGXLogger} from 'ngx-logger';
import {Router} from '@angular/router';
import {GrowlService} from 'ngx-growl';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  providers: [TestingDirective]
})
export class SignInComponent {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private logger: NGXLogger,
              private router: Router,
              private growlService: GrowlService) {
    this.createForm();
  }

  createForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  login(): void {
    const loginRequest: SignInRequest = this.loginForm.value;
    this.authService.login(loginRequest)
      .subscribe((x) => {
        this.router.navigate(['/logged/devices']);
      }, () => {
        this.growlService.addError('Email lub hasło są nieprawidłowe');
      });
  }


}
