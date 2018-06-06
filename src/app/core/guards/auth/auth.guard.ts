import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
    private router: Router) {

  }
  /**
   * @description Check active token
   */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.token) {
      return true;
    } else if (sessionStorage.getItem('authToken')) {
      this.saveTokenFromSession();
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }

  /**
   * @description Save token from session
   */
  saveTokenFromSession() {
    const token: string = sessionStorage.getItem('authToken');
    this.saveToken({ Authorization: token });
  }
  /**
   * @description Save token
   * @param token Pass token
   */
  saveToken(token: { Authorization: string }): void {
    this.authService.token = token;
  }
}
