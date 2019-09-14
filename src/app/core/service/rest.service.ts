import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  getAllReportUrl = environment.apiUrl + "/GetAllReport/";


  constructor(
    private _http: HttpClient
  ) { }

  getAllReport() {
    return this._http.get(this.getAllReportUrl);
  }
}
