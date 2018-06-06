import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Device } from '../../../shared/models/device';
import { Observable } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class DeviceRestService {

  constructor(private http: HttpClient) {
  }
  /**
   * @description Add device to database
   * @param device Fedding the device
   */
  addDevice(device: Device): Observable<any> {
    return this.http.post('https://localhost:8443/device/create', device);
  }
  /**
   * @description Download array of device's
   */
  getDevicesList(): Observable<Device[]> {
    return this.http.get<Device[]>('https://localhost:8443/device/get');
  }
  /**
   * @description Download specific dvice from database
   * @param id Providing a specific device by id
   */
  getDevice(id: number): Observable<Device> {
    return this.http.get<Device>(`https://localhost:8443/device/get/${id}`);
  }
}
