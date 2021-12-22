const Contenedor = require("./modules/contenedor.js");
const productos = [
    {name:"Manzana", price:120, type:"Verde"},
    {name:"Manzana", price:150, type:"Roja"},
    {name:"Naranja", price:100, type:"NA"},
    {name:"Banana", price:200, type:"Ecuador"},
];

async function ejecutar(){
    const cont = new Contenedor("./productos.txt");
    try{

        for (const item of productos) {
            await cont.save(item);
        }

    }
    catch(error){
        console.log(error.message);
    }
    
    cont.getById(1).then(dato => console.log(dato)).catch(error=>console.log(error.message)); 
    cont.getById(19).then(dato => console.log(dato)).catch(error=>console.log(error.message)); 
    cont.deleteById(4).then(() => console.log("Se borro un elemento")).catch(error=>console.log(error.message));
    //cont.deleteAll().then(()=>console.log("se borro todo")); //Descomentar para borrar todo
}

ejecutar();
