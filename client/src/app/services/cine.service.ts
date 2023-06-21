import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cine } from '../models/Cine';

@Injectable({
  providedIn: 'root'
})
export class CineService {
  private apiUrl = 'http://localhost:3000/api/cines/';

  constructor(private http: HttpClient) {}

  getCines(): Observable<Cine[]> {
    return this.http.get<Cine[]>(this.apiUrl);
  }

  crearCine(cine: Cine): Observable<any> {
    return this.http.post(this.apiUrl, cine);
  }

  eliminarCine(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
