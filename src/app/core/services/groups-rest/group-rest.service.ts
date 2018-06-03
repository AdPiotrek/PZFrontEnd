import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class GroupRestService {

  constructor(private http: HttpClient) {
  }

  addDeviceGroup(name: string): Observable<any> {
    return this.http.post(`https://localhost:8443/deviceFamily/create`, {familyName: name});
  }

  getLoggedUserDeviceGroups(): Observable<any> {
    return this.http.get('https://localhost:8443/deviceFamily/get');
  }

}
