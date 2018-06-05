import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthService} from '../auth/auth.service';
import {Observable, throwError} from 'rxjs/index';
import {catchError} from 'rxjs/operators';
import {GrowlService} from 'ngx-growl';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService,
              private growService: GrowlService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authService.token) {
      const reqWithToken = req.clone({setHeaders: this.authService.token});
      return next.handle(reqWithToken).
      pipe(
        catchError((err) => {
          this.growService.addError('Żadanie nie powiodło się, jesli nie ma dalszych instrukcji skontaktuj sie z administratorem')
          return throwError(err);
        })
      );
    } else {
      return next.handle(req);
    }
  }
}
