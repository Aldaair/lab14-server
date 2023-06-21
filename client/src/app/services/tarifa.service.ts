import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarifa } from '../models/Tarifa';

@Injectable({
  providedIn: 'root'
})
export class TarifaService {
  url = 'http://localhost:3000/api/tarifas';

  constructor(private http: HttpClient) {}

  crearTarifa(tarifa: Tarifa): Observable<any> {
    console.log(tarifa)
    return this.http.post(this.url, tarifa);
  }
  getTarifaById(id: string): Observable<Tarifa> {
    return this.http.get<Tarifa>(`${this.url}/${id}`);
  }
  obtenerTarifas(): Observable<Tarifa[]> {
    return this.http.get<Tarifa[]>(this.url);
  }
  eliminarTarifa(id: string): Observable<void> {
    const url = `${this.url}/${id}`;
    return this.http.delete<void>(url);
  }
  actualizarTarifa(id: string, tarifa: Tarifa): Observable<any> {
    return this.http.put(`${this.url}/${id}`, tarifa);
  }
}
