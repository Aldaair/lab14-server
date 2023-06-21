import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CinesconpeliculaService {
  private apiUrl = 'http://localhost:3000/api/cinesconpelicula';

  constructor(private http: HttpClient) { }

  getCinesConPeliculas(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      catchError((error) => {
        console.error(error);
        throw error;
      })
    );
  }
}
