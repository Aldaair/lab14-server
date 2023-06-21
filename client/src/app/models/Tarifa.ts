export class Tarifa {
  _id?: string;
  dia: string;
  precio: number;
  id_cine: string;

  constructor(dia: string, precio: number, id_cine: string) {
    this.dia = dia;
    this.precio = precio;
    this.id_cine = id_cine;
  }
}
