import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignUpService } from '../services/sign-up/sign-up.service';
import {GrowlService} from 'ngx-growl';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;

  constructor(private log: NGXLogger,
    private fb: FormBuilder,
    private signUpService: SignUpService,
              private growlService: GrowlService) {
  }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      repeatedPassword: ['', [Validators.required]]
    });
  }
  /**
   * @description Rejestracja
   */
  signUp(): void {

    const userSignUpReq = this.signUpForm.value;
    if (userSignUpReq.password !== userSignUpReq.repeatedPassword) {
      this.growlService.addError('Podane hasła nie pasują do siebie');
      return;
    }

    if (this.signUpForm.invalid) {
      this.growlService.addError('Podane dane są nieprawidłowe');
      return;
    }
    delete userSignUpReq.repeatedPassword;
    this.signUpService.signUp(userSignUpReq)
      .subscribe(() => {
        this.growlService.addSuccess('Zarejestrowano pomyslnie');
      }, () => {
        this.growlService.addSuccess('Podany mail jest zajęty');
      });
  }

}
