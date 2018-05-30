import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SignInRequest} from '../../../shared/models/sign-in-request';
import {Observable} from 'rxjs/index';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token = null;

  constructor(private http: HttpClient) {
  }

  login(loginData: SignInRequest): Observable<any> {
    return this.http.post(`https://localhost:8443/login`, loginData)
      .pipe(
        map((token) => {
          this.token = token;
          return token;
        })
      );
  }
}
