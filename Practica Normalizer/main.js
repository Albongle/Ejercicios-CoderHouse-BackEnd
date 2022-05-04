const { faker } = require("@faker-js/faker");
const mensajesANormalizar = {id:1,mensajes:[]};
const { normalize, denormalize, schema } = require("normalizr");



const mensaje = new schema.Entity("mensaje");
const autor = new schema.Entity("autor",{mensaje:[mensaje]});
const chat = new schema.Entity("mensajes", {mensajes:[mensaje], autor:[autor]});
generarMensajes();


const datos = normalize(mensajesANormalizar, chat);


console.log("datos normalizados");
console.log(JSON.stringify(datos));




const denormalizeData = denormalize(datos.result, chat, datos.entities);
console.log("datos desnormalizados");
console.log(denormalizeData);

function generarMensajes() {
  for (let index = 0; index < 3; index++) {
    const objeto = {
      id: faker.finance.amount(0, 100, 0),
      autor: {
        id: faker.finance.amount(0, 3, 0),
        nombre: faker.name.firstName(),
        apellido: faker.name.lastName(),
        // edad: faker.finance.amount(15, 100, 0),
        // alias: faker.internet.email(),
        // avatar: faker.internet.avatar(),
      },
      mensaje:faker.lorem.lines()
    };
    mensajesANormalizar.mensajes.push(objeto);
  }

  return {
    id: faker.finance.amount(0, 100, 0),
    autor: {
      id: faker.finance.amount(0, 3, 0),
      nombre: faker.name.firstName(),
      apellido: faker.name.lastName(),
      // edad: faker.finance.amount(15, 100, 0),
      // alias: faker.internet.email(),
      // avatar: faker.internet.avatar(),
    },
    mensaje:faker.lorem.lines()
  };
}



