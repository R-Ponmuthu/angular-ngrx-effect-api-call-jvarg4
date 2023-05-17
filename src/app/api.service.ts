import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) {}

  rootURL = 'https://client.stage.accelalphacloud.com/rbac/members/iplan';

  getShipment() {
    return this.http.get(this.rootURL + '/getAllShipment');
  }
}
