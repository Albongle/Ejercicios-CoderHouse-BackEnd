//#region 'Primer Ejercicio'
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
//#endregion


//#region "Segundo Ejercicio"

class Contador{
    static contadorClase = 0;
    #nombre;
    #contadorInstancia;
    constructor(nombre){
        this.#nombre=nombre
        this.#contadorInstancia = 0;
    }

    obtenerResponsable(){
        return this.#nombre;
    }
    obtenerCuentaIndividual(){
        return this.#contadorInstancia;
    }
    static obtenerCuentaGlobar(){
        return Contador.contadorClase;
    }
    contar (){
        this.#contadorInstancia++;
        Contador.contadorClase++;
    }
}

cont1 = new Contador("Alejandro");
console.log(cont1.obtenerResponsable());
//#endregion

