//Arrays es un listado de datos

const superList = ["Banana", "Pescado", "Queso", "Gaseosa", "Tomate"]

//Como acceder a un valor del array
console.log(superList);
console.log(superList[0]);

//Objetos es un conjunto de datos que ahce a un dato mas grande, que les da valor y propiedades que hace algo en particular. A lo que sea que estamos describiendo

const carObj = {
    brand: "Peugeot", 
    model: 2009,
    automatic: true,
    color: "Gris",
    drivers: [{
        name: "Guadalupe",
        nacion: "Argentina"
    }, {
        name: "Gimena",
        nacionality: "Chile"
    }, {
        name: "Sebastian",
        nacionality: "Argentina"
    }, ]
}

console.log(carObj);
console.log(carObj.drivers); // dot notation
console.log(carObj["color"]) //Para referirme a un dato en especifico
console.log(carObj.drivers[1].name)

