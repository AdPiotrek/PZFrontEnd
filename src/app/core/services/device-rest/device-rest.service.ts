import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Device} from '../../../shared/models/device';
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class DeviceRestService {

  constructor(private http: HttpClient) {
  }

  addDevice(device: Device): Observable<any> {
    return this.http.post('https://localhost:8443/device/create', device);
  }

  getDevicesList(): Observable<Device[]> {
    return this.http.get<Device[]>('https://localhost:8443/device/get');
  }
}
