const knex = require("knex");
const database  = knex({
    client:'mysql',
    connection:{
        host:'127.0.0.1',
        user:'root',
        password:'',
        database:'coderhouse'
    },
    pool:{min:0,max:7}
});

class ManagerDataBase{

     static createTable = (nombre)=>{
         database.schema.dropTableIfExists(table) //borro la tabla si existe
         .then(()=>{
            database.schema.createTable(nombre,table=>{
                table.increments();
                table.string("name");
                table.float("price");
    
            })
            .then(data=> console.log(`creada la tabla ${nombre}`))
            .catch(error=>console.log(`${error.sqlMessage} - ${error.sql}`))
            .finally(()=>{
                database.destroy();
            });

         });

    }

    async static insertAutos = (table, objeto)=>{

        database(table).insert(objeto)
        .then(data=> console.log(`Se guardo un objeto`))
        .catch(error=>console.log(`${error.sqlMessage} - ${error.sql}`))
        .finally(()=>{
            database.destroy();
        });

    };
    static insertAutosArray = (table, array)=>{

        database(table).insert(array)
        .then(data=> console.log(`Se guardo un objeto`))
        .catch(error=>console.log(`${error.sqlMessage} - ${error.sql}`))
        .finally(()=>{
            database.destroy();
        });

    };

    static selectAutos = (table)=>{

        database(table)
        .then(data=> console.log(data))
        .catch(error=>console.log(`${error.sqlMessage} - ${error.sql}`))
        .finally(()=>{
            database.destroy();
        });

    };
    static selectAutosById = (table, id)=>{

        database(table).where("id",id)
        .then(data=> console.log(data))
        .catch(error=>console.log(`${error.sqlMessage} - ${error.sql}`))
        .finally(()=>{
            database.destroy();
        });

    };
    static selectAutosById2 = (table, id)=>{

        database(table).where({id:id})
        .then(data=> console.log(data))
        .catch(error=>console.log(`${error.sqlMessage} - ${error.sql}`))
        .finally(()=>{
            database.destroy();
        });

    };
    static selectAutosById3 = (table, id)=>{

        database(table).where("id","=",id)
        .then(data=> console.log(data))
        .catch(error=>console.log(`${error.sqlMessage} - ${error.sql}`))
        .finally(()=>{
            database.destroy();
        });

    };
    static selectAutosIn = (table,select, array)=>{

        database(table).whereIn(select,array)
        .then(data=> console.log(data))
        .catch(error=>console.log(`${error.sqlMessage} - ${error.sql}`))
        .finally(()=>{
            database.destroy();
        });

    };
}


module.exports = ManagerDataBase;