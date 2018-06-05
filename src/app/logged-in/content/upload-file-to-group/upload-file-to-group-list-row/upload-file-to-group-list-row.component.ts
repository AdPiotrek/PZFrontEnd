import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HistoryRestService} from '../../../../core/services/history-rest.service';
import {DeviceGroup} from '../../../../shared/models/device-group';
import {Observable} from 'rxjs/internal/Observable';
import {forkJoin} from 'rxjs/internal/observable/forkJoin';
import {GrowlService} from 'ngx-growl';
import {NGXLogger} from 'ngx-logger';

@Component({
  selector: 'app-upload-file-to-group-list-row',
  templateUrl: './upload-file-to-group-list-row.component.html',
  styleUrls: ['./upload-file-to-group-list-row.component.scss']
})
export class UploadFileToGroupListRowComponent implements OnInit {

  @Input() group: DeviceGroup = null;
  @Input() files: Array<{ blobid: string, blobName: string }>;

  selectForm: FormGroup;

  constructor(private fb: FormBuilder,
              private historyRest: HistoryRestService,
              private growlService: GrowlService,
              private logger: NGXLogger) {
  }

  ngOnInit() {
    this.createForm();
  }


  createForm() {
    this.selectForm = this.fb.group({
      select: [null, Validators.required]
    });
  }

  uploadFiles() {
    this.logger.debug(this.selectForm.get('select').value === null);
    console.log(this.selectForm);
    if (this.selectForm.invalid || this.selectForm.get('select').value == null) {
      this.growlService.addWarn('Plik nie został wybrany');
      return;
    }
    if (this.group.devices.length === 0) {
      this.growlService.addInfo('W grupie nie ma urządzeń');
      return;
    }
    const observables: Array<Observable<any>> = [];
    if (this.group.devices) {
      for (const device of this.group.devices) {
        observables.push(this.historyRest.registerInHistory(device.deviceid, this.selectForm.get('select').value));
      }
    }

    forkJoin(...observables)
      .subscribe(() => {
          this.growlService.addSuccess('Pliki dodane');
        },
        (err) => {
        });
  }

}
