export abstract class Calculador {
    protected numA:number;
    protected numB:number;
    protected constructor(numA:number,numB:number){
        this.numA = numA;
        this.numB = numB;
    }

    abstract operar():number;
}
