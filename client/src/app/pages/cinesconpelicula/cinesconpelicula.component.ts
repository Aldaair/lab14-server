import { Component, OnInit } from '@angular/core';
import { CinesconpeliculaService } from 'src/app/services/cinesconpelicula.service';
import { ReporteService } from 'src/app/services/reporte.service';

import { Pelicula } from 'src/app/models/Pelicula';
@Component({
  selector: 'app-cinesconpelicula',
  templateUrl: './cinesconpelicula.component.html',
  styleUrls: ['./cinesconpelicula.component.css']
})
export class CinesconpeliculaComponent {
  cinesConPeliculas: any[] = [];
  resultadosBusqueda: any[] = [];
  busquedaCine: string = "";
  busquedaPelicula: string = "";

  constructor(private cinesConPeliculaService: CinesconpeliculaService, private _reporteService: ReporteService) {
    this.getCinesConPeliculas();
  }
  
  
  generarReporte() {
    this._reporteService.getPDF().subscribe(
      (response: Blob) => {
        // Crear una URL para el archivo PDF
        console.log(response)
        const url = URL.createObjectURL(response);
  
        // Abrir el PDF en una nueva ventana/tab
        window.open(url);
  
        // Descargar el PDF utilizando un enlace de descarga
        const a = document.createElement('a');
        a.href = url;
        a.download = 'CinesYPeliculas.pdf';
        a.style.display = 'none';
  
        document.body.appendChild(a);
        a.click();
  
        // Limpiar la URL y el enlace de descarga
        URL.revokeObjectURL(url);
        document.body.removeChild(a);
      },
      (error: any) => {
        console.log('Hubo un error al generar el PDF:', error);
      }
    );
  }
  
  getCinesConPeliculas() {
    this.cinesConPeliculaService.getCinesConPeliculas()
      .subscribe(
        (data: any[]) => {
          this.cinesConPeliculas = data;
        },
        (error) => {
          console.error(error);
        }
      );
  }

  buscarPorCine() {
    if (this.busquedaCine) {
      this.resultadosBusqueda = this.cinesConPeliculas.filter(cine => cine.cine.nombre.toLowerCase().includes(this.busquedaCine.toLowerCase()));
      console.log(this.resultadosBusqueda)
    } else {
      this.resultadosBusqueda = [];
    }
  }

  buscarPorPelicula() {
    if (this.busquedaPelicula) {
      this.resultadosBusqueda = [];
      this.cinesConPeliculas.forEach(cine => {
        const peliculasEncontradas = cine.peliculas.filter((pelicula: Pelicula) => pelicula.titulo.toLowerCase().includes(this.busquedaPelicula.toLowerCase()));
        if (peliculasEncontradas.length > 0) {
          peliculasEncontradas.forEach((pelicula: Pelicula) => {
            this.resultadosBusqueda.push({
              cine: cine.cine,
              pelicula: pelicula
            });
          });
        }
      });
    } else {
      this.resultadosBusqueda = [];
    }
  }
}
