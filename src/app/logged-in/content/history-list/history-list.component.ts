import {Component, OnInit, ViewChild} from '@angular/core';
import {HistoryRestService} from '../../../core/services/history-rest.service';
import {MatSort, MatTableDataSource} from '@angular/material';
import {DeviceGroup} from '../../../shared/models/device-group';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.scss']
})
export class HistoryListComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  dataSource: MatTableDataSource<any> = null;
  displayedColumns = ['position', 'deviceName', 'blobName', 'macAdress'];

  constructor(private historyRest: HistoryRestService) {
  }

  ngOnInit() {
    this.getHistory();
  }


  getHistory(): void {
    this.historyRest.getHistory()
      .subscribe((group: Array<any>) => {
        console.log(group);
        this.dataSource = new MatTableDataSource(group);
        this.dataSource.sort = this.sort;
      });
  }

}
