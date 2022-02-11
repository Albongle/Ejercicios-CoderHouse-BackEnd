export class Perimetro{
    public static Cuadrado(lado:number):number{
        return lado*4;
    }
    public static Rectangulo(base:number, altura:number):number{
        return base * 2 + altura * 2;
    }

    public static Circulo(radio:number):number{
        return Math.PI * radio * 2;
    }
}