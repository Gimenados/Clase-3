//Ciclos for anidados 

//const carsQuantity = 50;
//const peopleByCar = 1; 

//for (let i = 0; i < carsQuantity; i++) { // Declaro el ciclo for
//    const car = "Auto #";  //Variable car
//    const carWithNumber = car.concat(i);  //variable cantidad de autos
//    let carWithPeople = carWithNumber; //Anuncio variable persona y la uso en el for
//    for (let y = 0; y < peopleByCar; y++) { //En el for de adentro agrego el emoji 
//           carWithPeople = carWithPeople.concat("👨‍🦱"); //Darle el valor inicial comando el auto sin personas y agregarle el auto con la persona La cantidad de personas 
//}
//    console.log(carWithPeople);
//}


const carsQuantity = 50;
const peopleByCar = 5; 

for (let i = 0; i < carsQuantity; i++) { // Declaro el ciclo for
    const car = "Auto #";  //Variable car
    const carWithNumber = car.concat(i);  //variable cantidad de autos con el for
    let people =  ""; //Anuncio variable persona y la uso en el for
    for (let y = 0; y < peopleByCar; y++) { //En el for de adentro agrego el emoji 
           people = people.concat("👨‍🦱"); //Darle el valor inicial comando el auto sin personas y agregarle el auto con la persona La cantidad de personas 
}
    console.log(carWithNumber+people);
}
