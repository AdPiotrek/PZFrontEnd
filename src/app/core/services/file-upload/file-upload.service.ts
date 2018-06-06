import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private httpClient: HttpClient) {
  }
  /**
   *
   * @param fd Upload the file to the database
   */
  uploadFile(fd: FormData): Observable<any> {
    const file: File = <File>fd.get('file');
    return this.httpClient.post(`https://localhost:8443/blob?fileName=${file.name}`, fd);
  }

  /**
   * @description Download blob list
   */
  getBlobsList(): Observable<Array<{ blobid: string, blobName: string }>> {
    return this.httpClient.get<Array<{ blobid: string, blobName: string }>>(`https://localhost:8443/blob/get`);
  }
}
