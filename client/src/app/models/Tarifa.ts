export class Tarifa {
  _id?: string;
  dia: string;
  precio: number;

  constructor(dia: string, precio: number) {
    this.dia = dia;
    this.precio = precio;
  }
}
