import { Component, OnInit } from '@angular/core';
import { Tarifa } from 'src/app/models/Tarifa';
import { Cine } from 'src/app/models/Cine';
import { CineService } from 'src/app/services/cine.service';
import { TarifaService } from 'src/app/services/tarifa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarifa',
  templateUrl: './tarifa.component.html',
  styleUrls: ['./tarifa.component.css'],
})
export class TarifaComponent implements OnInit {
  tarifas: Tarifa[] = [];
  cines: Cine[] = [];

  nuevaTarifa: Tarifa = new Tarifa('', 0);

  constructor(
    private tarifaService: TarifaService,
    private cineService: CineService,
    private router: Router
  ) {}

  ngOnInit() {
    this.obtenerTarifas();
    this.obtenerCines();
  }

  obtenerTarifas() {
    this.tarifaService.obtenerTarifas().subscribe(
      (response: Tarifa[]) => {
        this.tarifas = response;
        console.log(this.tarifas);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  obtenerCines() {
    this.cineService.getCines().subscribe(
      (response: Cine[]) => {
        this.cines = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  crearTarifa() {
    this.tarifaService.crearTarifa(this.nuevaTarifa).subscribe(
      (response) => {
        this.obtenerTarifas(); // Actualizar la lista de tarifas
        this.nuevaTarifa = new Tarifa('', 0); // Limpiar el formulario
      },
      (error) => {
        console.error(error);
      }
    );
  }

  eliminarTarifa(tarifa: Tarifa): void {
    if (tarifa._id === undefined) {
      return;
    }
    console.log(tarifa._id)
    this.tarifaService.eliminarTarifa(tarifa._id).subscribe(() => {
      this.obtenerTarifas();
    });
  }
  editarTarifa(tarifa: Tarifa): void {
    console.log(tarifa)
    this.router.navigate(['/editar-tarifa', tarifa._id], {
      state: { tarifa },
    });
  }
}
