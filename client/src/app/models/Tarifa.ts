export class Tarifa {

    _id?: string;
    id_tarifa: string;
    dia: string
    precio: number;

    constructor(id_tarifa:string, dia:string, precio: number){
        this.id_tarifa = id_tarifa;
        this.dia = dia;
        this.precio = precio;
    }

}