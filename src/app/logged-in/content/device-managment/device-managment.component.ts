import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-device-managment',
  templateUrl: './device-managment.component.html',
  styleUrls: ['./device-managment.component.scss']
})
export class DeviceManagmentComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  displayedColumns = ['position', 'name', 'mac-adress'];
  dataSource = new MatTableDataSource(
    [{position: 1, name: 'grupa1', macAdress: '432143214-32432143122-1434312'},
      {position: 2, name: 'tewdsat234', macAdress: '4321433242314-321132-1434312'},
      {position: 3, name: 'fdasfgq234', macAdress: '432143214-32154353132-1434312'},
      {position: 4, name: 'vczxvrt45', macAdress: '432143214-352435423-1434312'}]
  );

  constructor() {
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}
