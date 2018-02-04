import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
@Injectable()
export class UploadcsvService {

  constructor(private http: Http) { }

  uploadDatasource(payload): Observable<any[]> {
    let headers = new Headers();
    headers.append('Accept', 'application/json, text/plain,');
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:8000/upload_csv', payload, options)
      .map((res) => {
        let data = res.json();
        return data;
      })
      .catch(error => Observable.throw(error))
  }

}
