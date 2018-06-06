import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SignInRequest} from '../../../shared/models/sign-in-request';
import {Observable} from 'rxjs/index';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {GrowlService} from 'ngx-growl';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _token = null;

  set token(token: { Authorization: string }) {
    console.log('token');
    this._token = token;
    sessionStorage.setItem('authToken', token.Authorization);
  }

  get token() {
    return this._token;
  }

  constructor(private http: HttpClient,
              private router: Router,
              private growlService: GrowlService) {
  }

  login(loginData: SignInRequest): Observable<any> {
    return this.http.post(`https://localhost:8443/login`, loginData)
      .pipe(
        map((token: { Authorization: string }) => {
          this.token = token;
          return token;
        })
      );
  }

  logout() {
    sessionStorage.clear();
    this._token = null;
    this.growlService.addSuccess('Wylogowano');
    this.router.navigate(['/home']);
  }
}
