import { Component, OnInit } from '@angular/core';
import {Device} from '../../../shared/models/device';
import {FileUploadService} from '../../../core/services/file-upload/file-upload.service';
import {DeviceRestService} from '../../../core/services/device-rest/device-rest.service';
import {Observable} from 'rxjs/internal/Observable';
import {GroupRestService} from '../../../core/services/groups-rest/group-rest.service';
import {DeviceGroup} from '../../../shared/models/device-group';

@Component({
  selector: 'app-upload-file-to-group',
  templateUrl: './upload-file-to-group.component.html',
  styleUrls: ['./upload-file-to-group.component.scss']
})
export class UploadFileToGroupComponent implements OnInit {


  groups: Observable<Array<DeviceGroup>> = null;
  files: Observable<Array<{ blobid: string, blobName: string }>> = null;
  constructor(private deviceRest: DeviceRestService,
              private groupRest: GroupRestService,
              private fileRest: FileUploadService) { }

  ngOnInit() {
    this.groups = this.groupRest.getLoggedUserDeviceGroups();
    this.files = this.fileRest.getBlobsList();
  }

}
