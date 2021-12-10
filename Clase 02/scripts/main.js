function mostrarLista (lista){
    Array.isArray(lista) && lista.length>0 ? console.log(lista):console.log("Lista Vacia");
}

const mostrarListaAnom = (lista)=> Array.isArray(lista) && lista.length>0 ? console.log(lista):console.log("Lista Vacia");

mostrarListaAnom([]);

mostrarLista([1,2,3]);

const crearMultiplicador = (numero)=> (segundoNumero)=> numero*segundoNumero;

const duplicar = crearMultiplicador(5);
const triplicar= crearMultiplicador(5);
console.log(duplicar(2));
console.log(duplicar(3));

class Contador{
    static numero = 0;
    constructor(nombre){
        this.#nombre = nombre;
        numero++;
    }

    obtenerResponsable(){
        return this.#nombre;
    }
}