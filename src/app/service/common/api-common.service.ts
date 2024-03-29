import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root'
})
export class ApiCommonService {

  private apiUrl;

  constructor(
    private http: HttpClient,
    private helper: HelperService
  ) { 
    this.apiUrl = environment.api_url;
   }

   getHeader(){
    return { headers: this.helper.getAuthHeader() }; 
   }

  public get(route): Observable<any> {
    const url = this.apiUrl + route;
    return this.http.get(url, this.getHeader());
  }

  public store(route, data): Observable<any> {
    const url = this.apiUrl + route;
    return this.http.post(url, data, this.getHeader());
  }

  public update(route, data): Observable<any> {
    const url = this.apiUrl + route;
    return this.http.put(url, data, this.getHeader());
  }

  public delete(route, id): Observable<any> {
    const url = this.apiUrl + route + id;
    return this.http.delete(url, this.getHeader());
  }

}
