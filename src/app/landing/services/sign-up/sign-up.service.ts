import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { SignUpUserRequest } from '../../../shared/models/sign-up-user-request';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http: HttpClient) {
  }
  /**
   *
   * @param user Wprowadzamy użytkownika ktory ma zostać zarejestrowany
   */
  signUp(user: SignUpUserRequest): Observable<any> {
    return this.http.post('https://localhost:8443/user/register', user);
  }
}
