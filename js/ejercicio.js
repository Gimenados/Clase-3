//Ejercicio 1

const pecera = 1;
const numeroPeces = 2;

for (i = 0; i < pecera; i++) {
   const peces = `Estos son los peces de la pecera --> `
   let cantidadDePeces = "🐟".repeat(numeroPeces) 
   console.log(peces + cantidadDePeces);
}

//Ejercicio 2

const cantidadDeAsteriscos = 5;

for (i = 0; i <= cantidadDeAsteriscos; i++) {
   let piramide = "*".repeat(i);
   console.log(piramide)
}

//Ejercicio 3 COPIA

let array = [1,2,3,4,5,6,7];
let suma = 0;
let index;
for (index = 0;index < array.length; index++) {
    console.log(`elemento #${index+1}: ${array[index]}`);
    suma = suma + array[index];
}

console.log(`dividendo: ${suma}`);
console.log(`divisor: ${index}`);
console.log("el promedio es: ",suma/(array.length));