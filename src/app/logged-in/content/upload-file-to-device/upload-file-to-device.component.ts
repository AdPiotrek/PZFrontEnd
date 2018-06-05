import { Component, OnInit } from '@angular/core';
import {DeviceRestService} from '../../../core/services/device-rest/device-rest.service';
import {Device} from '../../../shared/models/device';
import {Observable} from 'rxjs/internal/Observable';
import {FileUploadService} from '../../../core/services/file-upload/file-upload.service';

@Component({
  selector: 'app-upload-file-to-device',
  templateUrl: './upload-file-to-device.component.html',
  styleUrls: ['./upload-file-to-device.component.scss']
})
export class UploadFileToDeviceComponent implements OnInit {

  devices: Observable<Array<Device>> = null;
  files: Observable<Array<{ blobid: string, blobName: string }>> = null;
  constructor(private deviceRest: DeviceRestService,
              private fileRest: FileUploadService) { }

  ngOnInit() {
    this.devices = this.deviceRest.getDevicesList();
    this.files = this.fileRest.getBlobsList();
  }

}
