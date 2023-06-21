import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cine } from 'src/app/models/Cine';
import { CineService } from 'src/app/services/cine.service';

@Component({
  selector: 'app-cines',
  templateUrl: './cines.component.html',
  styleUrls: ['./cines.component.css'],
})
export class CinesComponent implements OnInit {
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
  }
}
