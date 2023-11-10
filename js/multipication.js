// Desarrollar un algoritmo donde se loguee las tablas de multiplicacion 
// Con variables para cantidad de tablas y cantidad de mmultiplicacion por tabla

const quantityTables = 10;
const multiplicationByTable = 10;

for (let m = 1; m <= quantityTables; m++) {
    console.log(`TABLA DEL #${m}`);
    for (let n = 0; n <= multiplicationByTable; n++) {
         console.log(`${m} x ${n} = ${m * n}`)
    }
}

// Crear un algoritmo de JS donde se declara una variable numerica 
//llamada "limit" y logre que loguee por consola de forma decreciente los
//los valores de limit hasta el 0

let limit = 10;

for (let i = limit; i >= 0; i--) { //mientras i sea igual a limit, i es >= a 0 y decrementamos
    console.log(`Numero del ${i}`);
}
