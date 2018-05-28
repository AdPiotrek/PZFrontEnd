import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-group-adding',
  templateUrl: './group-adding.component.html',
  styleUrls: ['./group-adding.component.scss']
})
export class GroupAddingComponent implements OnInit {

  addGroupForm: FormGroup;

  constructor(private fb: FormBuilder) {
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

}
