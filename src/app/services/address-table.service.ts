import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class addressTableService {

  constructor(private http: HttpClient) {}

  getAddressDetails(): Observable<any> {
    return this.http.get<any>('https://api.macaddress.io/v1?apiKey=at_BULmXFODqtiqHIVJ6CERtQ11sBwzn&output=json&search=44:38:39:ff:ef:57')
  }


}