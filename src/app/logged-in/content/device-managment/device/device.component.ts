import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Device} from '../../../../shared/models/device';
import {switchMap} from 'rxjs/operators';
import {DeviceRestService} from '../../../../core/services/device-rest/device-rest.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';import {NGXLogger} from 'ngx-logger';
import {GrowlService} from 'ngx-growl';

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
    private fb: FormBuilder,
              private router: Router,
              private logger: NGXLogger,
              private growlService: GrowlService) {
    this.getDevice();
    this.buildForm();
  }

  ngOnInit() {
  }
  /**
   * @description Form of editing the device
   */
  buildForm() {
    this.devicEditForm = this.fb.group({
      name: ['', Validators.required],
      macAdress: ['', Validators.required],
    });
  }
  /**
   * @description Downloading the device
   */
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
    const req = {
      deviceid: this.device.deviceid,
      ...this.devicEditForm.value
    };

    if (this.devicEditForm.invalid){
      this.growlService.addError('Podane pola są nieprawidłowe');
      return;
    }

    this.deviceRest.updateDevice(req)
      .subscribe(() => {
        this.logger.debug('[Device Component editDevice()]: updated');
        this.growlService.addSuccess('Zmieniono');
      }, () => {
        this.growlService.addError('Podany adres mac lub nazwa są wykorzystywane przez inne urządzenie');
      });


  }

  deleteDevice() {
    this.deviceRest.deleteDevice(+this.device.deviceid)
      .subscribe((res) => {
        this.growlService.addSuccess('Usunieto');
        this.router.navigate(['/logged/devices']);
      });
  }

}
