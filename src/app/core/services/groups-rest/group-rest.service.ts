import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { DeviceGroup } from '../../../shared/models/device-group';

@Injectable({
  providedIn: 'root'
})

export class GroupRestService {

  constructor(private http: HttpClient) {
  }
  /**
   * @param {string} name  Pass the name of the device added to the group
   */
  addDeviceGroup(name: string): Observable<any> {
    return this.http.post(`https://localhost:8443/deviceFamily/create`, { familyName: name });
  }
  /**
   * @description Downloading the logged in device user in the group
   */
  getLoggedUserDeviceGroups(): Observable<Array<DeviceGroup>> {
    return this.http.get<Array<DeviceGroup>>('https://localhost:8443/deviceFamily/get');
  }
  /**
   * @example
   * Specifying the Id numbers of the group that we want to get in the result
   * getGroupById(12)
   *
  *@param {string} id Number Id
  *@returns Returns the group by Id
  */
  getGroupById(id: string): Observable<DeviceGroup> {
    return this.http.get<DeviceGroup>(`https://localhost:8443/deviceFamily/get/${id}`);
  }

  /**
   * @example
   * addDeviceToGroup(group1, 12) -
   * adding a device with id: 12 from the group: group1
   * @param {string} groupId Id group's
   * @param {string} deviceId Id device
   * @returns Addition of the object
   */
  addDeviceToGroup(groupId: string, deviceId: string) {
    const req = {
      familyID: groupId,
      deviceID: deviceId
    };

    return this.http.post('https://localhost:8443/deviceFamily/addDevice', req);
  }
  /**
   * @example
   * removeDeviceFromGroup(group1, 12) - remove device o
   * id:12 from group: group1
   *
   * @param {string} groupId Id group
   * @param {string} deviceId Id device
   * @returns Removal of the object
   */
  removeDeviceFromGroup(groupId: string, deviceId: string) {
    return this.http.delete(`https://localhost:8443/deviceFamily/${groupId}/removeDevice/${deviceId}`);
  }

}
