import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pelicula } from 'src/app/models/Pelicula';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css'],
})
export class EditarPeliculaComponent implements OnInit {
  peliculaForm: FormGroup = this.formBuilder.group({});

  constructor(
    private formBuilder: FormBuilder,
    private peliculaService: PeliculasService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  /* ngOnInit(): void {
    this.inicializarFormulario();
    this.route.params.subscribe((params) => {
      const peliculaId = params['id'];
      if (peliculaId) {
        this.cargarPelicula(peliculaId);
      }
    });
  } */
  ngOnInit(): void {
    this.inicializarFormulario();
    const peliculaId = history.state.pelicula._id;
    console.log(history.state.pelicula._id);
    if (peliculaId) {
      this.cargarPelicula(peliculaId);
    }
  }

  inicializarFormulario(): void {
    this.peliculaForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      director: ['', Validators.required],
      clasificacion: ['', Validators.required],
      protagonista: ['', Validators.required],
      genero: ['', Validators.required],
    });
  }

  cargarPelicula(peliculaId: string): void {
    this.peliculaService.getPeliculaById(peliculaId).subscribe(
      (pelicula) => {
        this.peliculaForm.patchValue({
          titulo: pelicula.titulo,
          director: pelicula.director,
          clasificacion: pelicula.clasificacion,
          protagonista: pelicula.protagonista,
          genero: pelicula.genero,
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  enviarFormulario(): void {
    if (this.peliculaForm.invalid) {
      return;
    }

    const peliculaData = this.peliculaForm.value;
    const pelicula = new Pelicula(
      peliculaData.titulo,
      peliculaData.director,
      peliculaData.clasificacion,
      peliculaData.protagonista,
      peliculaData.genero
    );

    this.peliculaService
      .actualizarPelicula(pelicula, history.state.pelicula._id)
      .subscribe(
        () => {
          this.router.navigate(['/peliculas']);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  cancelarEdicion(): void {
    this.router.navigate(['/peliculas']);
  }
}
