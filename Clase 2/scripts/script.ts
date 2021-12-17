
abstract class Persona{
    protected nombre:string;
    protected apellido:string;
    protected edad:number;

    protected constructor(nombre:string,apellido:string, edad?:number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad || 0;

    }
}

class Usuario extends Persona{
    private legajo:string;
    constructor(nombre:string, apellido:string,legajo:string,edad?:number){
        super(nombre,apellido,edad);
        this.legajo = legajo;
    }

}