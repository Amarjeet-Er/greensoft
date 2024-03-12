import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GsService {
  baseurl = 'http://localhost/gsapi/'
  constructor(
    private http :HttpClient
  ) { }

  enquriy_insert(data:any){
    return this.http.post<any>('https://greensoft.net.in/gscms/api/inquiry_insert.php',data)
  }
  contact_insert(data:any){
    return this.http.post<any>(this.baseurl+'contctus_insert.php',data)
  }
}
