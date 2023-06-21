export class Cine {
  _id?: string;
  nombre: string;
  calle: string;
  numero: string;
  telefono: string;

  constructor(
    nombre: string,
    calle: string,
    numero: string,
    telefono: string,
  ) {
    this.nombre = nombre;
    this.calle = calle;
    this.numero = numero;
    this.telefono = telefono;
  }
}
