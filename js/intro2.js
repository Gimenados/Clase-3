console.log("---Asignacion---");

//La asignacion de un valor lo vamos a hacer con un "=""
let data = 5;

console.log(data);
data = "Esta es nuestra primera asignacion";
console.log(data);
console.log("/-------Operadores matematicos y numericos--------/")

// Simbologia para operaciones matematicas 
// Suma + , Resta - , Multiplicacion *, Division /. 

console.log("Ejemplo de suma", 10 + 2);
console.log("Ejemplo de resta", 10 - 2);
console.log("Ejemplo de multiplicacion", 10 * 2);
console.log("Ejemplo de division", 10 / 2);

//Ejemplo de un calculo combinado

console.log("ejemplo", 10 / (2 + 3));

//Simbologia de operadores logicos
// AND (Y - Vamos a pedir que ocurra una cosa y la otra ) --> &&
//OR (O- Vamos a pedir que ocurra una cosa o la otra) --> ||
//Mayor que --> > 
//Menor que --> <
//Mayor o igual que --> =>

const num1 = 7;
const stg = "abc";

console.log("Ejemplo de mayor", num1 > 4); //True
console.log("Ejemplo de menor", num1 > 7) //False
console.log("Ejemplo de mayor", stg > "mno"); //No se rompe es false
console.log("Ejemplo de mayor", stg > "abc"); //No se rompe es true

//El not invierte el resultado
console.log("Not - Cambia un booleno a su contrario (Pero no es necesario que sea un booleano)", !5);
console.log("Not - Cambia un booleno a su contrario (Pero no es necesario que sea un booleano)", !0);
console.log("Not", !"0")

//Comparaciones

console.log("Simplemente igual", num1 == "7") //true
console.log("Simplemente noigual", num1 != 3) //true
console.log("Estrictamente igual", num1 === "8") //False
console.log("Estrictamente noigual", num1 !== "7") //false porq me ve el tipo de 7 este por ejemplo es un string

// And y or

console.log("AND - Pedir que se cumplan ambas condiciones", num1 > 5 && num1 < 10 ) //True decimos que num1 es mayor a 5 y menor a 10
console.log("AND - Pedir que se cumplan ambas condiciones", num1 < 5 && num1 < 10 ) //True
console.log("AND - Pedir que se cumplan al menos una de las condiciones", num1 < 5 || num1 < 10 ) //True num1 menor a 5 o menor a 10