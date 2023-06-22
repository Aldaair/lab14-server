import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cine } from 'src/app/models/Cine';
import { CineService } from 'src/app/services/cine.service';
=======
import { Cine } from 'src/app/models/Cine';
import { Pelicula } from 'src/app/models/Pelicula';
import { Tarifa } from 'src/app/models/Tarifa';
import { CineService } from 'src/app/services/cine.service';
import { TarifaService } from 'src/app/services/tarifa.service';
import { PeliculasService } from 'src/app/services/peliculas.service';
>>>>>>> a1632601e17e009f551a888672ab0be3a4113f22

@Component({
  selector: 'app-cines',
  templateUrl: './cines.component.html',
  styleUrls: ['./cines.component.css'],
})
export class CinesComponent implements OnInit {
<<<<<<< HEAD
  cines: Cine[] = [];
  cineForm: FormGroup = this.formBuilder.group({});

  constructor(
    private formBuilder: FormBuilder,
    private cineService: CineService
  ) {}

  ngOnInit(): void {
    this.cineForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      calle: ['', Validators.required],
      numero: ['', Validators.required],
      telefono: ['', Validators.required],
    });

    this.obtenerCines();
  }

  obtenerCines(): void {
    this.cineService.getCines().subscribe((cines) => {
      this.cines = cines;
    });
  }

  crearCine(): void {
    if (this.cineForm.invalid) {
      return;
    }

    const cineData = this.cineForm.value;
    const nuevoCine = new Cine(
      cineData.nombre,
      cineData.calle,
      cineData.numero,
      cineData.telefono,
    );

    this.cineService.crearCine(nuevoCine).subscribe(() => {
      this.cineForm.reset();
      this.obtenerCines();
    });
  }

  eliminarCine(cine: Cine): void {
    if (!cine._id) {
      return; // Manejar el caso en el que _id sea undefined
    }

    this.cineService.eliminarCine(cine._id).subscribe(() => {
      this.obtenerCines();
    });
=======
  listTodo: any
  listCines: Cine[] = [];
  listTarifas: Tarifa[] = [];
  listPeliculas: Pelicula[] = [];
  newCine: any = {};
  constructor(
    private _cineService: CineService,
    private _tarifaService: TarifaService,
    private _peliculaService: PeliculasService
  ) {}

  ngOnInit() {
    this.getCines();
  }
  getCines() {
    this._cineService.getCines().subscribe(
      (response) => {
        this.listCines = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getTarifas() {
    this._tarifaService.getTarifas().subscribe(
      (response) => {
        this.listTarifas = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getPeliculas() {
    this._peliculaService.getPeliculas().subscribe(
      (response) => {
        this.listPeliculas = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  createCines() {
    this._cineService.guardarCine(this.newCine).subscribe(
      (response) => {
        this.getCines();
        this.newCine = {}; // Limpiar los campos del formulario
      },
      (error) => {
        console.log(error);
      }
    );
  }
  verTodo(){
>>>>>>> a1632601e17e009f551a888672ab0be3a4113f22
  }
}
