import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, Subject, BehaviorSubject } from "rxjs";

const params = new HttpParams();
params.append("Content-Type", "multipart/form-data");
params.append("Accept", "application/json");

const options = {
  params: params,
};

export class HttpUtil {
  constructor(public http: HttpClient) {}

  private httpHeaders = new HttpHeaders({ "Content-Type": "application/json" });

  get(url: any): Observable<any> {
    return this.http.get<any>(url);
  }


  post(url: any): Observable<any> {
    return this.http.post<any>(url, {
      headers: this.httpHeaders,
    });
  }

  postParams(url: any, parms: any): Observable<any> {
    return this.http.post<any>(url, parms, {
      headers: this.httpHeaders,
    });
  }

  postFile(url: any, parms: any): Observable<any> {
    return this.http.post<any>(url, parms, options);
  }

  put(url: any): Observable<any> {
    return this.http.put<any>(url, { headers: this.httpHeaders });
  }

  putParams(url: any, parms: any): Observable<any> {
    return this.http.put<any>(url, parms, { headers: this.httpHeaders });
  }
}
