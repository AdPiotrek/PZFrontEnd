import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../core/services/auth/auth.service';

@Component({
  selector: 'app-logged-in-header',
  templateUrl: './logged-in-header.component.html',
  styleUrls: ['./logged-in-header.component.scss']
})
export class LoggedInHeaderComponent implements OnInit {

  /**
   * @ignore
   */
  constructor(private authService: AuthService) {
  }

  /**
   * @ignore
   */
  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

}
