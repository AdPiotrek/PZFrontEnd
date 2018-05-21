import {Component, OnInit} from '@angular/core';
import {NGXLogger} from 'ngx-logger';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;

  constructor(private log: NGXLogger,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      repeatedPassword: ['', [Validators.required]]
    });
  }

  signUp(): void {
    this.log.error('dsadsasd');
    console.log('xDD')

  }

}
