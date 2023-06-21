import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cine } from '../models/Cine';

@Injectable({
  providedIn: 'root'
})
export class CineService {
  url = 'http://localhost:3000/api/cines/';
  constructor(private http: HttpClient) { 

  }
  guardarCine(cine: Cine): Observable<any> {
    return this.http.post(this.url, cine);
  }
  getCines(): Observable<any> {
    return this.http.get(this.url);
  }
}
