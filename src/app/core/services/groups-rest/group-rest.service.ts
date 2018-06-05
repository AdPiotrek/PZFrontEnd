import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {DeviceGroup} from '../../../shared/models/device-group';
import {RequestMethod} from '@angular/http';
import {group} from '@angular/animations';

@Injectable({
  providedIn: 'root'
})

export class GroupRestService {

  constructor(private http: HttpClient) {
  }

  addDeviceGroup(name: string): Observable<any> {
    return this.http.post(`https://localhost:8443/deviceFamily/create`, {familyName: name});
  }

  getLoggedUserDeviceGroups(): Observable<Array<DeviceGroup>> {
    return this.http.get<Array<DeviceGroup>>('https://localhost:8443/deviceFamily/get');
  }

  getGroupById(id: string): Observable<DeviceGroup> {
    return this.http.get<DeviceGroup>(`https://localhost:8443/deviceFamily/get/${id}`);
  }

  addDeviceToGroup(groupId: string, deviceId: string) {
    const req = {
      familyID: groupId,
      deviceID: deviceId
    };

    return this.http.post('https://localhost:8443/deviceFamily/addDevice', req);
  }

  removeDeviceFromGroup(groupId: string, deviceId: string) {
    return this.http.delete(`https://localhost:8443/deviceFamily/${groupId}/removeDevice/${deviceId}`);
  }

}
