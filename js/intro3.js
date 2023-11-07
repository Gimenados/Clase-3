// Concatenaciones de STRINGS

const greeting = "Hola! Bienvenido a nuestra app, ";
const userName = "Nicolas";

console.log (greeting + userName);
console.log(greeting.concat(userName)); //Dos formas de hacer lo mismo con la funcion concat
console.log(`Hola! Bienvenido a nuestra app,${userName}`); //Template string 

//Primer flujo logico (if / if else)
//Cuando queramos que se ejecute un codigo dependiendo de una operacion logica

const num = 3; 
const num2 = 5;

if (num > num2) { //condicion
     console.log (`${num} es mayor a ${num2}`) //resultado
} else if ( num < num2) { //condicion 2
    console.log (`${num} es menor a ${num2}`) //resultado
} else { //Si estos dos no se cumple 
    console.log("Num y Num2 son iguales") //resultado
}

console.log("---Bucles For-----")
//console.log("Casa nro 1")
//console.log("Casa nro 2")
//console.log("Casa nro 3")
//console.log("Casa nro 3")
//console.log("Casa nro 4")
//console.log("Casa nro 5")
//console.log("Casa nro 6")
//console.log("Casa nro 7")

for (let index = 1; index <= 7; index = index+2) {
  console.log(`Casa nro ${index}`)  
}

console.log("fin del ciclo for")