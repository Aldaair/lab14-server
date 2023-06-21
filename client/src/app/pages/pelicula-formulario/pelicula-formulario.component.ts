import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Pelicula } from 'src/app/models/Pelicula';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-pelicula-formulario',
  templateUrl: './pelicula-formulario.component.html',
  styleUrls: ['./pelicula-formulario.component.css']
})
export class PeliculaFormularioComponent implements OnInit {
  peliculaForm: FormGroup = this.formBuilder.group({}); // Inicialización vacía

  constructor(
    private formBuilder: FormBuilder,
    private peliculaService: PeliculasService
  ) {}

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  inicializarFormulario(): void {
    this.peliculaForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      director: ['', Validators.required],
      clasificacion: ['', Validators.required],
      protagonista: ['', Validators.required],
      genero: ['', Validators.required]
    });
  }

  enviarFormulario(): void {
    if (this.peliculaForm.invalid) {
      return;
    }

    const peliculaData = this.peliculaForm.value;
    const nuevaPelicula = new Pelicula(
      peliculaData.titulo,
      peliculaData.director,
      peliculaData.clasificacion,
      peliculaData.protagonista,
      peliculaData.genero
    );

    this.peliculaService.crearPelicula(nuevaPelicula).subscribe(() => {
      this.peliculaForm.reset();
    });
  }
}
