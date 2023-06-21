export class Pasa {
  _id?: string;
  hora: Date;
  id_cine: string;
  id_pelicula: string;

  constructor(hora: Date, id_cine: string, id_pelicula: string) {
    this.hora = hora;
    this.id_cine = id_cine;
    this.id_pelicula = id_pelicula;
  }
}
