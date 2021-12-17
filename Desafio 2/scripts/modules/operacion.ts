export const operacion = (numeroA:number,numeroB:number,operacion:string): Promise<any>=> new Promise(async (resolve,reject)=>{
    if(operacion !== "suma" && operacion !== "resta"){
        reject(new Error("Operacion no permitida"));
    }
    else{
        let op = await import(`../modules/${operacion}.js`);
        let resultado = op.resultado(numeroA,numeroB);
        resolve(resultado);

    }
})
