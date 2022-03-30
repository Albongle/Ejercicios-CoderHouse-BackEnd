// Agregar 10 documentos con valores distintos a las colecciones mensajes y productos. El formato de los documentos debe estar en correspondencia con el que venimos utilizando en el entregable con base de datos MariaDB.
// Definir las claves de los documentos en relación a los campos de las tablas de esa base. En el caso de los productos, poner valores al campo precio entre los 100 y 5000 pesos(eligiendo valores intermedios, ej: 120, 580, 900, 1280, 1700, 2300, 2860, 3350, 4320, 4990).

db.productos.insertMany([
  {
    urlImg: "/assets/img/equipos/G60s.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, explicabo, facilis consequuntur doloremque, quae saepe voluptatem sapiente eius repudiandae!",
    nombre: "G60S",
    marca: "Motorola",
    gama: "Media",
    tipo: "Telefono",
    stock: 5,
    precio: 47999,
    cuotas: 6,
  },
  {
    urlImg: "/assets/img/equipos/12.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, explicabo, facilis consequuntur doloremque, quae saepe voluptatem sapiente eius repudiandae!",
    nombre: "12",
    marca: "Apple",
    gama: "Alta",
    tipo: "Telefono",
    stock: 15,
    precio: 215999,
    cuotas: 12,
  },
  {
    urlImg: "/assets/img/equipos/12ProMax.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, explicabo, facilis consequuntur doloremque, quae saepe voluptatem sapiente eius repudiandae!",
    nombre: "12ProMax",
    marca: "Apple",
    gama: "Alta",
    tipo: "Telefono",
    stock: 6,
    precio: 305999,
    cuotas: 12,
  },
  {
    urlImg: "/assets/img/equipos/A22.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, explicabo, facilis consequuntur doloremque, quae saepe voluptatem sapiente eius repudiandae!",
    nombre: "A22",
    marca: "Samsung",
    gama: "Baja",
    tipo: "Telefono",
    stock: 10,
    precio: 19000,
    cuotas: 3,
  },
  {
    urlImg: "/assets/img/equipos/A32.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, explicabo, facilis consequuntur doloremque, quae saepe voluptatem sapiente eius repudiandae!",
    nombre: "A32",
    marca: "Samsung",
    gama: "Baja",
    tipo: "Telefono",
    stock: 20,
    precio: 39669,
    cuotas: 3,
  },
  {
    urlImg: "/assets/img/equipos/Buds+.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, explicabo, facilis consequuntur doloremque, quae saepe voluptatem sapiente eius repudiandae!",
    nombre: "Buds+",
    marca: "Samsung",
    gama: "Alta",
    tipo: "Auricular",
    stock: 15,
    precio: 15999,
    cuotas: 12,
  },
  {
    urlImg: "/assets/img/equipos/E7.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, explicabo, facilis consequuntur doloremque, quae saepe voluptatem sapiente eius repudiandae!",
    nombre: "E7",
    marca: "Motorola",
    gama: "Baja",
    tipo: "Telefono",
    stock: 9,
    precio: 39999,
    cuotas: "3",
  },
  {
    urlImg: "/assets/img/equipos/Edge20.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, explicabo, facilis consequuntur doloremque, quae saepe voluptatem sapiente eius repudiandae!",
    nombre: "Edge20",
    marca: "Motorola",
    gama: "Media",
    tipo: "Telefono",
    stock: 4,
    precio: 139000,
    cuotas: 6,
  },
  {
    urlImg: "/assets/img/equipos/Fit2.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, explicabo, facilis consequuntur doloremque, quae saepe voluptatem sapiente eius repudiandae!",
    nombre: "Fit2",
    marca: "Samsung",
    gama: "Media",
    tipo: "SmartWatch",
    stock: 5,
    precio: 5999,
    cuotas: 6,
  },
  {
    urlImg: "/assets/img/equipos/K41s.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, explicabo, facilis consequuntur doloremque, quae saepe voluptatem sapiente eius repudiandae!",
    nombre: "K41S",
    marca: "LG",
    gama: "Media",
    tipo: "Telefono",
    stock: 10,
    precio: 284999,
    cuotas: 6,
  },
]);

db.mensajes.insertMany([{socketId:1, usuario:"user1",mensaje:"Hola"},{socketId:2, usuario:"user2",mensaje:"Hola"},
{socketId:1, usuario:"user1",mensaje:"Como estas?"},{socketId:2, usuario:"user2",mensaje:"Bien, vos?"}
,{socketId:3, usuario:"user3",mensaje:"Hola"},{socketId:1, usuario:"user1",mensaje:"Buenas"},
{socketId:2, usuario:"user2",mensaje:"Hola usuario 3"},{socketId:1, usuario:"user1",mensaje:"Que cuentas?"},
{socketId:3, usuario:"user3",mensaje:"Nada nuevo"},{socketId:2, usuario:"user2",mensaje:"Buenas noches"}]);


//Listar todos los documentos en cada colección
db.productos.find().pretty();
db.mensajes.find().pretty();
// Mostrar la cantidad de documentos almacenados en cada una de ellas.
db.productos.count();
db.mensajes.count();
// Realizar un CRUD sobre la colección de productos:
// Agregar un producto más en la colección de productos
db.productos.insert({
  urlImg: "/assets/img/equipos/K42.png",
  desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, explicabo, facilis consequuntur doloremque, quae saepe voluptatem sapiente eius repudiandae!",
  nombre: "K42",
  marca: "LG",
  gama: "Media",
  tipo: "Telefono",
  stock: 12,
  precio: 30999,
  cuotas: 6,
});

// Realizar una consulta por nombre de producto específico:

db.productos.find({nombre:"Fit2"}).pretty()
db.productos.find({marca:"Samsung"}).pretty()

// Listar los productos con precio menor a 1000 pesos. // modifque los intervalos dado que los valores que tengo son mas altos.
db.productos.find({precio:{$lt:6000}}).pretty() 

// Listar los productos con precio entre los 1000 a 3000 pesos.
db.productos.find({precio:{$gt:5999},precio:{$lt:16000}}).pretty()

// Listar los productos con precio mayor a 3000 pesos.
db.productos.find({precio:{$gt:100000}}).pretty()

// Realizar una consulta que traiga sólo el nombre del tercer producto más barato.
db.productos.find({},{nombre:1}).sort({precio:1}).skip(2).limit(1).pretty()

// Hacer una actualización sobre todos los productos, agregando el campo stock a todos ellos con un valor de 100.
db.productos.updateMany({},{$set:{stock:100}})


// Cambiar el stock a cero de los productos con precios mayores a 4000 pesos.
db.productos.updateMany({precio:{$gt:100000}},{$set:{stock:0}})
// Borrar los productos con precio menor a 1000 pesos
db.productos.remove({precio:{$lt:60000}})


// Crear un usuario 'pepe' clave: 'asd456' que sólo pueda leer la base de datos ecommerce. Verificar que pepe no pueda cambiar la información.

db.createUser({user: "pepe", pwd: "asd456",roles: [{ role: "read", db: "ecommerce" }]})

