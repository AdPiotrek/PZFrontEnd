import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-group-managment',
  templateUrl: './group-managment.component.html',
  styleUrls: ['./group-managment.component.scss']
})
export class GroupManagmentComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  displayedColumns = ['position', 'name'];
  dataSource = new MatTableDataSource(
    [
      {position: 1, name: 'grupa1'},
      {position: 2, name: 'tewdsat234'},
      {position: 3, name: 'fdasfgq234'},
      {position: 4, name: 'vczxvrt45'}]
  );

  constructor() {
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
}
