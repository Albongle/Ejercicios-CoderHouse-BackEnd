import {Calculador} from "./calculador.js";
class Resta extends Calculador{
    constructor(numA:number, numB:number){
        super(numA, numB);
     }
     operar() : number {
         return this.numA-this.numB;
     }
}

export const resultado = (numA:number, numB:number) : number=>{
    let cuenta : Resta = new Resta(numA,numB);
    return cuenta.operar();
}