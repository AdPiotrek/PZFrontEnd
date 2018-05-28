import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NGXLogger} from "ngx-logger";
import {UtilService} from "../../../core/services/Util/util.service";

@Component({
  selector: 'app-device-adding',
  templateUrl: './device-adding.component.html',
  styleUrls: ['./device-adding.component.scss']
})
export class DeviceAddingComponent implements OnInit {

  addDeviceForm: FormGroup;

  constructor(private fb: FormBuilder,
              private logger: NGXLogger,
              private utilService: UtilService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(): void {
    this.addDeviceForm = this.fb.group({
      name: ['', [Validators.required]],
      mac: ['', [Validators.required]]
    });
  }

  addDevice() {
    this.logger.debug('addDeviceMock');
    this.logger.debug(this.addDeviceForm.value);
    this.logger.debug(this.utilService.getRequiredErrorMessage());
  }

}
