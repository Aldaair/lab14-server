import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tarifa } from 'src/app/models/Tarifa';
import { TarifaService } from 'src/app/services/tarifa.service';

@Component({
  selector: 'app-editar-tarifa',
  templateUrl: './editar-tarifa.component.html',
  styleUrls: ['./editar-tarifa.component.css'],
})
export class EditarTarifaComponent implements OnInit {
  tarifaForm: FormGroup = this.formBuilder.group({});
  constructor(
    private formBuilder: FormBuilder,
    private tarifaService: TarifaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.inicializarFormulario();
    const tarifaId = history.state.tarifa._id;
    console.log(history.state.tarifa._id);
    if (tarifaId) {
      this.cargarTarifa(tarifaId);
    }
  }
  inicializarFormulario(): void {
    this.tarifaForm = this.formBuilder.group({
      dia: ['', Validators.required],
      precio: ['', Validators.required],
    });
  }

  cargarTarifa(tarifaId: string): void {
    this.tarifaService.getTarifaById(tarifaId).subscribe(
      (tarifa) => {
        this.tarifaForm.patchValue({
          dia: tarifa.dia,
          precio: tarifa.precio,
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  enviarFormulario(): void {
    if (this.tarifaForm.invalid) {
      return;
    }

    const tarifaData = this.tarifaForm.value;
    const tarifa = new Tarifa(
      tarifaData.dia,
      tarifaData.precio,
    );

    this.tarifaService
      .actualizarTarifa(history.state.tarifa._id, tarifa)
      .subscribe(
        () => {
          this.router.navigate(['/tarifas']);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  cancelarEdicion(): void {
    this.router.navigate(['/tarifas']);
  }
}
