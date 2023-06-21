import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cine } from 'src/app/models/Cine';
import { Pasa } from 'src/app/models/Pasa';
import { Pelicula } from 'src/app/models/Pelicula';
import { CineService } from 'src/app/services/cine.service';
import { PasaService } from 'src/app/services/pasa.service';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-pasa',
  templateUrl: './pasa.component.html',
  styleUrls: ['./pasa.component.css'],
})
export class PasaComponent implements OnInit {
  pasas: Pasa[] = [];
  cines: Cine[] = [];
  peliculas: Pelicula[] = [];
  pasaForm: FormGroup = this.formBuilder.group({});

  constructor(
    private formBuilder: FormBuilder,
    private pasaService: PasaService,
    private cineService: CineService,
    private peliculaService: PeliculasService
  ) {}

  ngOnInit(): void {
    this.pasaForm = this.formBuilder.group({
      hora: ['', Validators.required],
      id_cine: ['', Validators.required],
      id_pelicula: ['', Validators.required],
    });
    this.obtenerPasas();
    this.obtenerCines();
    this.obtenerPeliculas();
  }
  obtenerPasas() {
    this.pasaService.obtenerPasas().subscribe(
      (response: Pasa[]) => {
        this.pasas = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  obtenerCines(): void {
    this.cineService.getCines().subscribe((cines) => {
      this.cines = cines;
    });
  }

  obtenerPeliculas(): void {
    this.peliculaService.getPeliculas().subscribe((peliculas) => {
      this.peliculas = peliculas;
    });
  }

  enviarFormulario(): void {
    if (this.pasaForm.invalid) {
      return;
    }

    const pasaData = this.pasaForm.value;
    const nuevaPasa = new Pasa(
      pasaData.hora,
      pasaData.id_cine,
      pasaData.id_pelicula
    );
    // Aquí puedes llamar al servicio para guardar la nueva pasa
    this.pasaService.crearPasa(nuevaPasa).subscribe(() => {
      this.pasaForm.reset();
    });
    this.obtenerPasas();
  }
  eliminarPasa(index: number) {
    const pasa = this.pasas[index];

    if (!pasa._id) {
      return;
    }

    this.pasaService.eliminarPasa(pasa._id).subscribe(
      () => {
        this.obtenerPasas(); // Actualizar la lista de pasas
      },
      (error) => {
        console.error(error);
      }
    );
  }

  obtenerNombreCine(idCine: string): string {
    console.log(idCine);
    const cine = this.cines.find((cine) => cine._id === idCine);
    return cine ? cine.nombre : '';
  }

  obtenerTituloPelicula(idPelicula: string): string {
    const pelicula = this.peliculas.find(
      (pelicula) => pelicula._id === idPelicula
    );
    return pelicula ? pelicula.titulo : '';
  }
}
