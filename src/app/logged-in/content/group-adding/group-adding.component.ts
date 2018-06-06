import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GroupRestService } from '../../../core/services/groups-rest/group-rest.service';
import { NGXLogger } from 'ngx-logger';
import {GrowlService} from 'ngx-growl';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-group-adding',
  templateUrl: './group-adding.component.html',
  styleUrls: ['./group-adding.component.scss']
})
export class GroupAddingComponent implements OnInit {

  addGroupForm: FormGroup;

  constructor(private fb: FormBuilder,
    private deviceGroupRest: GroupRestService,
    private logger: NGXLogger,
              private growlService: GrowlService) {
    this.createForm();
  }
  /**
   * @ignore
   */
  ngOnInit() {
  }

  createForm(): void {
    this.addGroupForm = this.fb.group({
      name: ['', [Validators.required]]
    }
    );
  }

  /**
   * @description Adding a group
   */
  addGroup(): void {
    this.deviceGroupRest.addDeviceGroup(this.addGroupForm.get('name').value)
      .subscribe(() => {
        this.addGroupForm.reset();
      },
        (err: HttpErrorResponse) => {
          this.logger.error(err);
          if (err.status === 409) {
            this.growlService.addError('Grupa o podanej nazwie już istnieje');
          }
        });
  }

}
