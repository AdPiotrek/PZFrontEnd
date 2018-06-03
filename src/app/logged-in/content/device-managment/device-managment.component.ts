import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {Device} from '../../../shared/models/device';
import {DeviceRestService} from '../../../core/services/device-rest/device-rest.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-device-managment',
  templateUrl: './device-managment.component.html',
  styleUrls: ['./device-managment.component.scss']
})
export class DeviceManagmentComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  dataSource = null;
  displayedColumns = ['position', 'name', 'macAdress'];

  constructor(private deviceRest: DeviceRestService,
              private router: Router) {
  }

  ngOnInit() {
    this.deviceRest.getDevicesList()
      .subscribe((devices: Device[]) => {
        this.dataSource = new MatTableDataSource<Device>(devices);
        this.dataSource.sort = this.sort;
      });
  }

  goToDevice(row: Device): void {
    console.log(row);
    this.router.navigate(['logged/device', row.deviceid]);
  }

}
