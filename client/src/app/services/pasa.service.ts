import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pasa } from '../models/Pasa';

@Injectable({
  providedIn: 'root'
})
export class PasaService {
  private apiUrl = 'http://localhost:3000/api/pasas';

  constructor(private http: HttpClient) { }

  obtenerPasas(): Observable<Pasa[]> {
    return this.http.get<Pasa[]>(this.apiUrl);
  }

  crearPasa(pasa: Pasa): Observable<Pasa> {
    return this.http.post<Pasa>(this.apiUrl, pasa);
  }

  actualizarPasa(id: string, pasa: Pasa): Observable<Pasa> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Pasa>(url, pasa);
  }

  eliminarPasa(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
