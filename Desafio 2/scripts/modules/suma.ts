import {Calculador} from "./calculador.js";
class Suma extends Calculador{

    constructor(numA:number, numB:number){
       super(numA, numB);
    }
    operar() : number {
        return this.numA+this.numB;
    }
}


export const resultado = (numA:number, numB:number) : number=>{

    let cuenta : Suma = new Suma(numA,numB);
    return cuenta.operar();
}