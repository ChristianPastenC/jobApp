export class Empresa {
    id: string;
    logo: string;
    nombre: string;
    descripcion: string;

    constructor(id: string, nombre:string, logo:string, descripcion:string){
        this.id = id;
        this.logo = logo;
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
}  