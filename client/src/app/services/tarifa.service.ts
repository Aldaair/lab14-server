import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarifa } from '../models/Tarifa';

@Injectable({
  providedIn: 'root'
})
export class TarifaService {
  url = 'http://localhost:3000/api/tarifas/';
  constructor(private http: HttpClient) { 

  }
  guardarTarifa(tarifa: Tarifa): Observable<any> {
    return this.http.post(this.url, tarifa);
  }
  getTarifas(): Observable<any> {
    return this.http.get(this.url);
  }
}
