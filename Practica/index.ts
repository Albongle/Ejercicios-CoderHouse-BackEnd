export class Suma {
    protected numA: number;
    protected numB: number;
    constructor(numA : number, numB: number) {
        this.numA = numA;
        this.numB = numB;
    }

    operar():number{
        return this.numA+this.numB;
    }
}
