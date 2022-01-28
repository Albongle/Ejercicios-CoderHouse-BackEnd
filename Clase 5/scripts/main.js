import {ejecutar} from "./calculadorEdad.js";
const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]

let nombres = productos.reduce((acum,proximo)=> acum.length===0 ? acum+=proximo.nombre :acum+=","+proximo.nombre ,"");
console.log(nombres);

let precioTotal = (productos.reduce((acum,proximo)=> acum+=proximo.precio ,0));
console.log(precioTotal);
let prom = (precioTotal/productos.length);
console.log(prom);


let max = productos.reduce((prev,proximo)=> proximo.precio > prev.precio ? proximo : prev);
console.log(max);

let min = productos.reduce((prev,proximo)=> proximo.precio < prev.precio ? proximo : prev);
console.log(min);

let objeto =
{
    nombres: nombres,
    precioTotal : precioTotal,
    promedio : prom,
    max:max,
    min:min
}
console.log(objeto);

console.log(`\n\n\n**********Ejecucion del ejercicio 2****************\n\n\n`)


console.log(ejecutar());



