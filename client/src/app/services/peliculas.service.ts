import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pelicula } from '../models/Pelicula';

@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  url = 'http://localhost:3000/api/cines/';
  constructor(private http: HttpClient) {}
  guardarCine(peli: Pelicula): Observable<any> {
    return this.http.post(this.url, peli);
  }
  getPeliculas(): Observable<any> {
    return this.http.get(this.url);
  }
}
