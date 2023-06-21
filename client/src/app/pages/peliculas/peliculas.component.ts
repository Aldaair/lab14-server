import { Component } from '@angular/core';
import { Pelicula } from 'src/app/models/Pelicula';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
})
export class PeliculasComponent {
  peliculas: Pelicula[] = [];

  constructor(
    private peliculaService: PeliculasService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obtenerPeliculas();
  }

  obtenerPeliculas(): void {
    this.peliculaService.getPeliculas().subscribe((peliculas) => {
      this.peliculas = peliculas;
    });
  }

  eliminarPelicula(id: string | undefined): void {
    if (!id) {
      return; // Manejar el caso en el que id sea undefined
    }
    this.peliculaService.eliminarPelicula(id).subscribe(() => {
      this.obtenerPeliculas();
    });
  }
  editarPelicula(pelicula: Pelicula): void {
    this.router.navigate(['/editar-pelicula', pelicula._id], { state: { pelicula } });
  }
}
