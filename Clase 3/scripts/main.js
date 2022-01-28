const array1 = [1,2,3,4];

console.log(array1.includes(1));
console.log(array1.includes(1,1));


const objeto = {nombre:"Alejandro", apellido: "Bongioanni",edad:34};

console.log(Object.entries(objeto));
Object.entries(objeto).forEach((value)=> console.log(value));

console.log("algo".padStart(10));
console.log("algo".padEnd(10,123456));

let {a,b,...c} = {a:"Hi",b:"there", x:true,y:false};
console.log(a);
console.log(b);
console.log(c);

let otro = {a,b,...c};
console.log(otro);

console.log(null && "algo");
console.log(null || "algo");
console.log("Pedro" ?? "algo");
