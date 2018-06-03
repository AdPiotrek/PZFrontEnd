import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Device} from '../../../../shared/models/device';
import {switchMap} from 'rxjs/operators';
import {DeviceRestService} from '../../../../core/services/device-rest/device-rest.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {
  device: Device = null;
  devicEditForm: FormGroup;

  constructor(private currentRoute: ActivatedRoute,
              private deviceRest: DeviceRestService,
              private fb: FormBuilder) {
    this.getDevice();
    this.buildForm();
  }

  ngOnInit() {
  }

  buildForm() {
    this.devicEditForm = this.fb.group({
      name: ['', Validators.required],
      macAdress: ['', Validators.required],
    });
  }

  getDevice(): void {
    this.currentRoute.params.pipe(
      switchMap((params: Params) => {
        return this.deviceRest.getDevice(params['id']);
      })
    ).subscribe((device: Device) => {
      this.device = device;
      this.devicEditForm.patchValue(device);
      console.log(device);
    });
  }

  editDevice(): void {

  }

}
