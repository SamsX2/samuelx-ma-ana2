// crea un vector con los nuemros del 1 al 10, luego recorrelo y sumka todos los numeros del vector  
// y muestra el resulrado de la suma

let numeros =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//definir variable
let suma = 0;

for(let i = 0; i < numeros.length; i++) {
    suma = suma + numeros[i];
}
console.log(suma); 