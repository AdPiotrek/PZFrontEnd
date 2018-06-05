import { Component, OnInit } from '@angular/core';
import {GrowlService} from 'ngx-growl';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.scss']
})
export class LoggedInComponent implements OnInit {

  constructor(private growlService: GrowlService) { }

  ngOnInit() {
    this.growlService.addSuccess('super udalo sie');
  }

}
