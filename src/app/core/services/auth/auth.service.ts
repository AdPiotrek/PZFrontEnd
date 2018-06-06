import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignInRequest } from '../../../shared/models/sign-in-request';
import { Observable } from 'rxjs/index';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { GrowlService } from 'ngx-growl';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _token = null;
  /**
   * @description Setting the token
   */
  set token(token: { Authorization: string }) {
    console.log('token');
    this._token = token;
    sessionStorage.setItem('authToken', token.Authorization);
  }
  /**
   * @description Getter the token
   */
  get token() {
    return this._token;
  }

  constructor(private http: HttpClient,
    private router: Router,
    private growlService: GrowlService) {
  }
  /**
   * @description User login
   */
  login(loginData: SignInRequest): Observable<any> {
    return this.http.post(`https://localhost:8443/login`, loginData)
      .pipe(
        map((token: { Authorization: string }) => {
          this.token = token;
          return token;
        })
      );
  }
  /**
   * @description Clearing the session
   * Logout user
   */
  logout() {
    sessionStorage.clear();
    this._token = null;
    this.growlService.addSuccess('Wylogowano');
    this.router.navigate(['/home']);
  }
}
