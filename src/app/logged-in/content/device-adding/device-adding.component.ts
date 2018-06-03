import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NGXLogger} from "ngx-logger";
import {UtilService} from "../../../core/services/Util/util.service";
import {DeviceRestService} from "../../../core/services/device-rest/device-rest.service";

@Component({
  selector: 'app-device-adding',
  templateUrl: './device-adding.component.html',
  styleUrls: ['./device-adding.component.scss']
})
export class DeviceAddingComponent implements OnInit {

  addDeviceForm: FormGroup;

  constructor(private fb: FormBuilder,
              private logger: NGXLogger,
              private deviceRest: DeviceRestService,
              private utilService: UtilService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(): void {
    this.addDeviceForm = this.fb.group({
      name: ['', [Validators.required]],
      macAdress: ['', [Validators.required]]
    });
  }

  addDevice() {
    this.deviceRest.addDevice(this.addDeviceForm.value)
      .subscribe(() => {
          this.logger.debug('Dodane');
        },
        () => {

        });
  }

}
