const knex = require("knex");

class GestorDbMySql{

    #config;
    #database;
    #tabla;
    constructor(){
        this.#config = {
            client:"mysql",
            connection:
            {
              host:"127.0.0.1",
              user:"root",
              password:"",
              database:"coderhouse"
            },
            pool:{min:0, max:7}
          };
    }

    async crearTabla(nombre, columnas){
        try{
            this.#database=knex(this.#config);
            this.#tabla= nombre || "tabla_default";
            await this.#database.schema.dropTableIfExists(this.#tabla);
            await this.#database.schema.createTable(this.#tabla, table=>{
                table.increments();

                for (const key in columnas) {
                    switch(key)
                    {
                        case "strings":
                            columnas.strings.forEach(c=> c.length!= undefined ? table.string(c.name,parseInt(c.length)).notNullable() :table.string(c.name).notNullable());
                        break;
                        case "integers":
                            columnas.integers.forEach(c=> table.integer(c).notNullable());
                        break;
                        case "floats":
                            columnas.floats.forEach(c=> table.float(c).notNullable());
                        break;
                    }
                    
                }
            });
            console.log(`Tabla creada`);
        }
        catch(error){
            console.error(`${error}`);
        }
        finally{
            this.#database.destroy();
        }
    }

    async addElementos(elementos){
        try{
            this.#database=knex(this.#config);
            let res = await this.#database(this.#tabla).insert(elementos);
            console.log(`Se agregaron los elementos ${res}`);
            return res;
        }
        catch(error){
            console.error(`${error}`);
        }
        finally{
            this.#database.destroy();
        }

    }
    async getAllElementos()
    {
        try{
            this.#database=knex(this.#config);
            let res = await this.#database(this.#tabla);
            return res;
        }
        catch(error){
            console.error(`${error}`);
        }
        finally{
            this.#database.destroy();
        }

    }
    async getElementoById(id)
    {
        try{
            this.#database=knex(this.#config);
            let res = await this.#database(this.#tabla).where("id",id);
            return res;
        }
        catch(error){
            console.error(`${error}`);
        }
        finally{
            this.#database.destroy();
        }

    }
    async updateElemento(id,objeto)
    {
        try{
            this.#database=knex(this.#config);
            return await this.#database(this.#tabla).where("id",id).update(objeto);
        }
        catch(error){
            console.error(`${error}`);
        }
        finally{
            this.#database.destroy();
        }

    }
    async deleteElementoById(id)
    {
        try{
            this.#database=knex(this.#config);
            return await this.#database(this.#tabla).where("id",id).del();
        }
        catch(error){
            console.error(`${error}`);
        }
        finally{
            this.#database.destroy();
        }

    }
}

module.exports = GestorDbSqlite;