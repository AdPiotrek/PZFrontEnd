import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import * as _ from 'lodash';

import { GroupRestService } from '../../../../core/services/groups-rest/group-rest.service';
import { DeviceRestService } from '../../../../core/services/device-rest/device-rest.service';
import { DeviceGroup } from '../../../../shared/models/device-group';
import { MatSelectionListChange } from '@angular/material';
import { Device } from '../../../../shared/models/device';
import { NGXLogger } from 'ngx-logger';
import {GrowlService} from 'ngx-growl';


@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  group: DeviceGroup = null;
  userDevices = null;


  constructor(private groupRest: GroupRestService,
    private activatedRoute: ActivatedRoute,
    private devicesRest: DeviceRestService,
    private logger: NGXLogger,
              private growlService: GrowlService) {
  }
  /**
   * @description
   * Calling the method of downloading groups relative to id and devices
   */
  ngOnInit() {
    this.getGroupById();
    this.getDevices();
  }
  /**
   * @description
   * Downloading the group via the device id
   */
  getGroupById() {
    this.activatedRoute.params.pipe(
      switchMap((params: Params) => {
        return this.groupRest.getGroupById(params['id']);
      })
    ).subscribe((group: DeviceGroup) => {
      this.group = group;
    });
  }

  /**
   * @description
   * Downloading devices
   */
  getDevices() {
    this.userDevices = this.devicesRest.getDevicesList();
  }

  /**
   *@example
   * We give the device, which is to be checked whether it belongs to this group
   * isGroupContaintDevice( device )
   * @param {Device} device Introduction of the device
   * @returns Returns the boolean value true / false
   */
  isGroupContaintDevice(device: Device) {
    if (this.group) {
      for (const dev of this.group.devices) {
        if (_.isEqual(dev, device)) {
          return true;
        }
      }
    }
    return false;
  }

  /**
   * @description
   * We check whether the field has been activated or not
   * @param event Event checking the field
   */
  onOptionToggle(event: MatSelectionListChange) {
    const device: Device = event.option.value;
    if (event.option.selected) {
      this.logger.log(this.group.idDeviceFamilies);
      this.groupRest.addDeviceToGroup(this.group.idDeviceFamilies, device.deviceid)
        .subscribe((res) => {
          this.logger.debug(res);
          this.growlService.addSuccess('Dodano')
        });
    } else {
      this.groupRest.removeDeviceFromGroup(this.group.idDeviceFamilies, device.deviceid)
        .subscribe((res) => {
          this.logger.debug(res);
          this.growlService.addSuccess('Usunieto')

        }, (err) => {
          this.logger.error(err);
        });
    }
  }


}
