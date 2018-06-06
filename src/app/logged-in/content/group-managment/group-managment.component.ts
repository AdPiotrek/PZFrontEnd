import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { Device } from '../../../shared/models/device';
import { GroupRestService } from '../../../core/services/groups-rest/group-rest.service';
import { DeviceGroup } from '../../../shared/models/device-group';

@Component({
  selector: 'app-group-managment',
  templateUrl: './group-managment.component.html',
  styleUrls: ['./group-managment.component.scss']
})
export class GroupManagmentComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;


  dataSource: MatTableDataSource<DeviceGroup>;
  displayedColumns = ['position', 'familyName'];

  constructor(private router: Router,
    private deviceGroupRest: GroupRestService) {
  }

  /**
   * @description Calling the group collection method
   */
  ngOnInit() {
    this.getGroups();
  }

  /**
   * @description Download group
   */
  getGroups(): void {
    this.deviceGroupRest.getLoggedUserDeviceGroups()
      .subscribe((group: Array<DeviceGroup>) => {
        this.dataSource = new MatTableDataSource(group);
        this.dataSource.sort = this.sort;
      });
  }

  /**
   *
   * @param {DeviceGroup} row Transition through
   * device for the group
   */
  goToGroup(row: DeviceGroup): void {
    this.router.navigate(['/logged/group', row.idDeviceFamilies]);
  }


}
