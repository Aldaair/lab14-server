import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pelicula } from '../models/Pelicula';

@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  // Obtener todas las películas
  getPeliculas(): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(`${this.apiUrl}/peliculas`);
  }

  // Obtener una película por su ID
  getPeliculaById(id: string): Observable<Pelicula> {
    return this.http.get<Pelicula>(`${this.apiUrl}/peliculas/${id}`);
  }

  // Crear una nueva película
  crearPelicula(pelicula: Pelicula): Observable<Pelicula> {
    return this.http.post<Pelicula>(`${this.apiUrl}/peliculas`, pelicula);
  }

  // Actualizar una película existente
  actualizarPelicula(pelicula: Pelicula, id: String): Observable<Pelicula> {
    console.log(pelicula)
    return this.http.put<Pelicula>(
      `${this.apiUrl}/peliculas/${id}`,
      pelicula
    );
  }

  // Eliminar una película por su ID
  eliminarPelicula(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/peliculas/${id}`);
  }
  
}
