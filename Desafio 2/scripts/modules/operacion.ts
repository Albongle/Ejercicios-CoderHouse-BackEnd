export const operacion = (numeroA:number,numeroB:number,operacion:string): Promise<any>=> new Promise((resolve,reject)=>{
    if(operacion !== "suma" && operacion !== "resta"){
        reject(new Error("Operacion no permitida"));
    }
    else{

        import(`../modules/${operacion}.js`).then(resultado=> {
            let algo =  resultado.resultado(numeroA,numeroB);
             resolve(algo);
         }); 
    }


    
})
