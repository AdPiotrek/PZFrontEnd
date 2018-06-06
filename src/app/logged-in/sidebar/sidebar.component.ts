import {Component, OnInit} from '@angular/core';
import {UserRestService} from '../../core/services/user-rest/user-rest.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  /**
   * @ignore
   */
  constructor() { }
  user = null;

  constructor(private userRest: UserRestService) {
  }

  /**
   * @ignore
   */
  ngOnInit() {
    this.user = this.userRest.getLoggedUser()
      .pipe(tap(res => console.log(res)));
  }

}
