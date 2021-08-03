//Reto 2
//Import fs promise
const fs = require("fs/promises");

//Declaro el objeto
let persona = 
{
    "name": "Esteban",
    "surname": "Gustabo",
    "edad" : 34
}

//Promesas con .then y .catch
fs.writeFile("persona.json", JSON.stringify(persona, null, 2))
.then(function (path, data) {
    return fs.readFile("persona.json", "utf-8");
})
.then (function (data) {
    console.log(JSON.parse(data));
})
.catch(function (error) {
    console.log(error);
})

//Promesas con async y await
async function escribirJSON (path, obj)
{
    try
    {
        await fs.writeFile(path, JSON.stringify(obj));
        let resultado = await fs.readFile(path, "utf-8");
        console.log(JSON.parse(resultado));
    }
    catch (error)
    {
        console.log(error);
    }
}

escribirJSON("persona1.json", persona)

//Reto 3
//Importacion fs/promise
const fs = require("fs/promises");

//Módulo readline para convertirlo en promesas
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function preguntas(pregunta) {
    const question = new Promise((resolve, reject) => {
        rl.question (pregunta, (respuesta) => {resolve(respuesta)})
    })
    return question;
}

//Declaro el objeto que quiero modificar con las preguntas
let persona = {
    "name" : "",
    "surname" : "",
    "age" : 0
}

//Llamo al metodo y uso sus promesas de retorno (.then y .catch)
preguntas("¿Nombre?: ")
.then(function (question) {
    persona.name = question;
    return preguntas ("¿Apellido?: ");
})
.then (function (question) {
    persona.surname = question;
    return preguntas ("¿Edad?: ");
})
.then (function (question) {
    persona.age = question
    rl.close();
    return fs.writeFile("persona.json", JSON.stringify(persona, null, 2))
})
.then(function (path, data) {
    return fs.readFile("persona.json", "utf-8");
})
.then (function (data) {
    console.log(JSON.parse(data));
})
.catch(function (error) {
    console.log(error);
})

//Con las propiedades async y await
async function escribirJSON2 (path) {
    try
    {
        let respuesta1 = await preguntas("¿Nombre?: ");
        let respuesta2 = await preguntas("¿Apellido?: ");
        let respuesta3 = await preguntas("¿Edad?: ");
        let persona = {
            "name": respuesta1,
            "surname": respuesta2,
            "age": respuesta3
        }
        rl.close();
        await fs.writeFile(path, JSON.stringify(persona));
        let resultado = await fs.readFile(path, "utf-8");
        console.log(JSON.parse(resultado));
    }
    catch(error)
    {
        console.log(error);
    }
}

escribirJSON2("persona2.json");