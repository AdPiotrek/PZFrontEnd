import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GroupRestService} from '../../../core/services/groups-rest/group-rest.service';
import {NGXLogger} from 'ngx-logger';

@Component({
  selector: 'app-group-adding',
  templateUrl: './group-adding.component.html',
  styleUrls: ['./group-adding.component.scss']
})
export class GroupAddingComponent implements OnInit {

  addGroupForm: FormGroup;

  constructor(private fb: FormBuilder,
              private deviceGroupRest: GroupRestService,
              private logger: NGXLogger) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(): void {
    this.addGroupForm = this.fb.group({
        name: ['', [Validators.required]]
      }
    );
  }

  addGroup(): void {
    this.deviceGroupRest.addDeviceGroup(this.addGroupForm.get('name').value)
      .subscribe(() => {
          this.addGroupForm.reset();
        },
        (err: Error) => {
          this.logger.error(err);
        });
  }

}
