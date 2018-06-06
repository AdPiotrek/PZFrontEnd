import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignUpService } from '../services/sign-up/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;

  constructor(private log: NGXLogger,
    private fb: FormBuilder,
    private signUpService: SignUpService) {
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
    delete userSignUpReq.repeatedPassword;
    this.signUpService.signUp(userSignUpReq)
      .subscribe();
  }

}
