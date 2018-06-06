import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Device } from '../../../../shared/models/device';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HistoryRestService } from '../../../../core/services/history-rest.service';
import { GrowlService } from 'ngx-growl';

@Component({
  selector: 'app-upload-file-to-device-list-row',
  templateUrl: './upload-file-to-device-list-row.component.html',
  styleUrls: ['./upload-file-to-device-list-row.component.scss']
})
export class UploadFileToDeviceListRowComponent implements OnInit {
  @Input() device: Device = null;
  @Input() files: Array<{ blobid: string, blobName: string }>;

  selectForm: FormGroup;

  constructor(private fb: FormBuilder,
    private historyRest: HistoryRestService,
    private growlService: GrowlService) {
  }

  /**
   * @description Single call when creating a group form component
   */
  ngOnInit() {
    this.createForm();
  }

  /**
   * @description Creating a form of a form selection object
   */
  createForm() {
    this.selectForm = this.fb.group({
      select: ['', Validators.required]
    });
  }
  /**
   * @description Uploading a file
   */
  uploadFile() {
    if (this.selectForm.invalid || this.selectForm.get('select').value === '') {
      this.growlService.addWarn('Nie wybrałes pliku')
      return;
    }
    this.historyRest.registerInHistory(this.device.deviceid, this.selectForm.get('select').value)
      .subscribe(() => {
        this.growlService.addSuccess('Pliki dodane');
      })
      ;
  }


}
