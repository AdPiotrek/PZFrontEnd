import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {Device} from '../../../shared/models/device';
import {DeviceRestService} from '../../../core/services/device-rest/device-rest.service';

@Component({
  selector: 'app-device-managment',
  templateUrl: './device-managment.component.html',
  styleUrls: ['./device-managment.component.scss']
})
export class DeviceManagmentComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  dataSource = null;
  displayedColumns = ['position', 'name', 'mac-adress'];

  constructor(private deviceRest: DeviceRestService) {
  }

  ngOnInit() {
    this.deviceRest.getDevicesList()
      .subscribe((devices: Device[]) => {
        console.log(devices);
        this.dataSource = new MatTableDataSource<Device>(devices);
        this.dataSource.sort = this.sort;
      });
  }

}
