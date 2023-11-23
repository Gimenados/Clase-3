// //Ejercicio 1

// const pecera = 1;
// const numeroPeces = 2;

// for (i = 0; i < pecera; i++) {
//    const peces = `Estos son los peces de la pecera --> `
//    let cantidadDePeces = "🐟".repeat(numeroPeces) 
//    console.log(peces + cantidadDePeces);
// }

// //Ejercicio 2

// const cantidadDeAsteriscos = 5;

// for (i = 0; i <= cantidadDeAsteriscos; i++) {
//    let piramide = "*".repeat(i);
//    console.log(piramide)
// }

// //Ejercicio 3 COPIA

// let array = [1,2,3,4,5,6,7];
// let suma = 0;
// let index;
// for (index = 0;index < array.length; index++) {
//     console.log(`elemento #${index+1}: ${array[index]}`);
//     suma = suma + array[index];
// }

// //Ejercicio 3 

// console.log(`dividendo: ${suma}`);
// console.log(`divisor: ${index}`);
// console.log("el promedio es: ",suma/(array.length));

// let list= [6,14,30,31,35,42];
// let cant=list.length;
// for (i=0; i<cant; i++){
// let suma = suma+array[index]
// }

//Ejercicio con javascript

// let free = false; // variable entrada cuando se de lo convertimos en true

// const validarCliente = (time) => {
//    let edad = prompt ("¿Cual es tu edad?");
//    if (edad > 18) {
//       if (time >= 2 && time < 7 && free == false) {
//          alert("Podes pasar gratis porque sos la primer persona despues de las 2AM");
//          free = true;
//       } else {
//       alert(`Son las ${time}:00hs podes pasar, pero tenes que pagar la entrada`);
//    }
//  } else {
//    alert("Mira sos menor de edad, no tenes permido pasar")
//  }
// }

// validarCliente (23);
// validarCliente(24);
// validarCliente(0.2);
// validarCliente(0.6);
// validarCliente(1);
// validarCliente(2);
// validarCliente(2.4);
// validarCliente(3);

let cantidad = prompt("¿Cuantos alumnos son?");      //alumnos totales : [1: [Nombre, posicion]
                                                                        //2 
                                                                        //3 ] 
let alumnosTotales = [];

for (i = 0; i < cantidad; i++) {
   alumnosTotales[i] = [prompt("Nombre del alumno" + (i+1)),0];
}
  
const tomarAsistencia = (nombre,p) => {
   let presencia = prompt(nombre);
   if (presencia == "p" || presencia == "P") {
      alumnosTotales[i][1]++; //Accedemos al primer elemento dentro de otro elemnto del array Pedro , 1
   }
}

for (i= 0; i < 30; i++) {
   for (alumno in alumnosTotales) { //in para que nos pase la posicion
      tomarAsistencia(alumnosTotales[alumno][0],alumno);
   }
}

for (alumno in alumnosTotales) {
   let resultado = `${alumnosTotales[alumno][0]}:<br>
   _____________Presentes: ${alumnosTotales[alumno][1]}:<br>
   _____________Ausencias: ${30 - alumnosTotales[alumno[1]]}`;
   if (30 - alumnosTotales[alumnos][1] > 18 ){
      resultado += "reprobado por inasistencias<br>"
   } else {
      resultado += "<br><br>"
   }
}