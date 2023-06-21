export class Cine {
  _id?: string;
  nombre: string;
  calle: string;
  numero: string;
  telefono: string;
  id_tarifa: string;

  constructor(
    nombre: string,
    calle: string,
    numero: string,
    telefono: string,
    id_tarifa: string
  ) {
    this.nombre = nombre;
    this.calle = calle;
    this.numero = numero;
    this.telefono = telefono;
    this.id_tarifa = id_tarifa
  }
}
