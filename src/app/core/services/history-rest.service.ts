import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HistoryRestService {

  constructor(private http: HttpClient) {}

  registerInHistory(deviceId: string, blobId: string) {
    return this.http.post(`https://localhost:8443/history`, {deviceId: deviceId, blobId: blobId});
  }

  getHistory() {
    return this.http.get(`https://localhost:8443/history`);
  }
}
