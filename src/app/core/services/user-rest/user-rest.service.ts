import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {User} from '../../../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserRestService {

  constructor(private http: HttpClient) {
  }

  getLoggedUser(): Observable<User> {
    return this.http.get<User>('https://localhost:8443/user/get');
  }
}
