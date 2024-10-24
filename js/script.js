//comentario una sola linea
/* 
comentarios en bloque
*/
//como se inicializa un vector
//inicializar vacio
let vector =[];

//inicializar un  vector con informacion 
let numeros=[9,10,22,3,4,11,50,99];
let nombres=["brandon","alexa","siri"];
let logicos=[true,false,true, true];

// como se muestra la informacion de un vector

console.log(numeros);
console.log(nombres);
console.log(logicos);

//mostrar un valor en especifico

console.log(numeros[2]);
console.log(numeros[6]);

//como recorrer un vector
for(let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

//agregar datos
numeros.push(300,500, 100);
nombres.push("samuel");
console.log(numeros);
console.log(nombres);

//splice(posicion_inicial, cantidad_datos_a_borrar)

//crea un vector vacio llamado colores, añade colores y recorre el vector
//vector vacio

let colores=[];

//añadir

colores.push("rojo", "blanco", "negro");
console.log(colores);

//recorrer 

for(let i = 0; i < colores.length; i++) {
console.log(colores[i]);
}