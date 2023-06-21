import { Component, OnInit } from '@angular/core';
import { TarifaService } from 'src/app/services/tarifa.service';
import { Tarifa } from 'src/app/models/Tarifa';
@Component({
  selector: 'app-cines',
  templateUrl: './cines.component.html',
  styleUrls: ['./cines.component.css'],
})
export class CinesComponent implements OnInit {
  listTarifas: Tarifa[] = [];
  newTarifa: any = {};
  constructor(private _tarifaService: TarifaService) {}

  ngOnInit() {
    this.getTarifas();
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

  createTarifa() {
    this._tarifaService.guardarTarifa(this.newTarifa).subscribe(
      (response) => {
        this.getTarifas();
        this.newTarifa = {}; // Limpiar los campos del formulario
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
