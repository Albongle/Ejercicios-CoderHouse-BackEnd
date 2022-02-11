export class Superficie{
    public static Cuadrado(lado:number):number{
        return Math.pow(lado,2);
    }
    public static Rectangulo(base:number, altura:number):number{
        return base* altura/2;
    }

    public static Circulo(radio:number):number{
        return Math.PI * Math.pow(radio,2);
    }
}


