import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private httpClient: HttpClient) {
  }

  uploadFile(fd: FormData): Observable<any> {
    return this.httpClient.post('https://localhost:8443/blob?fileName=ogorek', fd);
  }
}
