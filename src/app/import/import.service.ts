import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ImportService {

  constructor(private http: Http) { }

  updateDatabase(params: any) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8000/upload_data', params, { headers: headers });
  }
}
