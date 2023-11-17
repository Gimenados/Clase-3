//Document Object Model 

//console.log(document.getElementById("Title")) //Me trae la etiqeuta vinculada de mi html
//const title = document.getElementById("Title");
//console.log(title.innerHTML)
//title.innerHTML = "Hola mundo!"//Es propiedad el elemento title devuelve o establece la sintaxis HTML describiendo los descendientes del element
//title.className = title.className + "Segunda clase"
//title.style = "color: green"

//console.log(document.getElementById("miDiv").innerHTML) // muestra el texto con las etiquetas
//console.log(document.getElementById("miDiv").innerText) // muestra el texto innertext
//window.prompt("Como estan")

//Variable
//const element = {
//    id: "string",
//    class: "css",
//    namer: "name",
//    innerHTML: "contenido de HTML",
//    innerTecx: "contenido de texto",
//}

//Funcion suma
//aisla una porcion de codigo que sea de mi utilidad y que se repita varias veces 

//Sumar varias veces entonces vamos a crear la funcion suma

//function suma ( a, b) {
//    return a+b;
//}

//const resultado = suma(40,60);

//console.log(resultado)

//Ejemplo del desafio 5 con funciones


function modulo (a, b) {
    return a % b;
}
function catConcat (stg, emoji) {
    return stg.concat(emoji)
}

const cantGatos = window.prompt("Cuantos gatos quiere mostrar?");

function catList(cats) {
    //parseInt te tranforma un "" a un number 
    const catsTypeNumber = parseInt(cats, 10); //Quiero q me devuelva un numero
    if (isNaN(catsTypeNumber)) {
        return console.warn("ingresaste un valor incorrecto")
    }
    for (let i =1; i <= cats; i++) {
        const mod = modulo(i, 3);
        let catNumber = `Gato #${i}`;
        if (mod === 1) {
            catNumber = catConcat(catNumber, "😺");
        } else if (mod === 2) {
            catNumber = catConcat(catNumber, "😸");
        } else {
            catNumber = catConcat(catNumber, "😹");
        }
        console.log(catNumber)
    }
}

catList(cantGatos);

//Otra forma de ver las funciones Arrows Functions  LLevan una flecha en su declaracion

const f = x => {
    return 2 * x + 1;
}

//Otra manera de hacerlo

const f2 = x => 2 * x + 1;

const f3 = (x, y) => 2 * x * y;

//CHILDREN para acceder a los elemnos hijos
// A

