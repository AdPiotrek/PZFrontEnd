import {Injectable} from '@angular/core';
import {SignUpUserRequest} from '../../../shared/models/sign-up-user-request';
import {Observable} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http: HttpClient) {
  }

  signUp(user: SignUpUserRequest): Observable<any> {
    return this.http.post('https://localhost:8443/user/register', user);
  }
}
