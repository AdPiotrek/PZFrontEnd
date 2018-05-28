import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SignInRequest} from '../../../shared/models/sign-in-request';
import {Observable} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(loginData: SignInRequest): Observable<any> {
    return this.http.post(`http://localhost:8080/login`, loginData);
  }
}
