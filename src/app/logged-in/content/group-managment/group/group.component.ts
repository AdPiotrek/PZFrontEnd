import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import * as _ from 'lodash';

import {GroupRestService} from '../../../../core/services/groups-rest/group-rest.service';
import {DeviceRestService} from '../../../../core/services/device-rest/device-rest.service';
import {DeviceGroup} from '../../../../shared/models/device-group';
import {MatSelectionListChange} from '@angular/material';
import {Device} from '../../../../shared/models/device';
import {NGXLogger} from 'ngx-logger';


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
              private logger: NGXLogger) {
  }

  ngOnInit() {
    this.getGroupById();
    this.getDevices();
  }

  getGroupById() {
    this.activatedRoute.params.pipe(
      switchMap((params: Params) => {
        return this.groupRest.getGroupById(params['id']);
      })
    ).subscribe((group: DeviceGroup) => {
      this.group = group;
    });
  }

  getDevices() {
    this.userDevices = this.devicesRest.getDevicesList();
  }

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

  onOptionToggle(event: MatSelectionListChange) {
    const device: Device = event.option.value;
    if (event.option.selected) {
      this.logger.log(this.group.idDeviceFamilies);
      this.groupRest.addDeviceToGroup(this.group.idDeviceFamilies, device.deviceid)
        .subscribe((res) => {
          this.logger.debug(res);
        });
    } else {
      this.groupRest.removeDeviceFromGroup(this.group.idDeviceFamilies, device.deviceid)
        .subscribe((res) => {
          this.logger.debug(res);
        }, (err) => {
          this.logger.error(err);
        });
    }
  }


}
