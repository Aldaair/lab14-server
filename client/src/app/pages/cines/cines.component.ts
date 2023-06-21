import { Component, OnInit } from '@angular/core';
import { Cine } from 'src/app/models/Cine';
import { Pelicula } from 'src/app/models/Pelicula';
import { Tarifa } from 'src/app/models/Tarifa';
import { CineService } from 'src/app/services/cine.service';
import { TarifaService } from 'src/app/services/tarifa.service';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-cines',
  templateUrl: './cines.component.html',
  styleUrls: ['./cines.component.css'],
})
export class CinesComponent implements OnInit {
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
  }
}
