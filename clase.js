//Clase sobre Callbacks y Promesas

//Creo un método que usa un callback como parámetro
function metodoCallBack (valor, callback) 
{
    if (valor) {
        return callback(null, "El valor es verdadero");
    }
    else {
        return callback("Error: El valor es falso", null);
    }
}

//Llamamos a la función callback
// metodoCallBack(true, function (error, data) {
//     if (error) {
//         console.log("Pene " + error);
//         metodoCallBack(false, function (error, data) {
//             if (error) {
//                 console.log("2 " + error);
//             }
//             else {
//                 console.log("2 " + data);
//             }
//         })
//     }
//     else {
//         console.log(data);
//         metodoCallBack(true, function (error, data) {
//             if (error) {
//                 console.log("2 " + error);
//             }
//             else {
//                 console.log("2 " + data);
//                 let result = 2 + 2;
//                 console.log(result);
//             }
//         })
//     }
// });

//Método con promesas
function metodoPromesas(valor)
{
    let promesa = new Promise(function (resolve, reject)
    {
        if (valor)
        {
            let peras = {"ok": true, "message": "El valor es verdadero"};
            setTimeout(function (error, data)
            {
                console.log("Timeout");
                resolve(peras);
            }, 2000);
        }
        else
        {
            let manzanas = {"ok": false, "message": "El valor es falso"};
            reject(manzanas);
        }
    })
    return promesa;
}

//Llamamos al metódo promesa con .then .catch
// metodoPromesas(false)
// .then(function (peras)
// {
//     console.log(peras);
// })
// .catch(function(error)
// {
//     console.log(error);
//     return metodoPromesas(true);
// })
// .then (function (peras)
// {
//     console.log("Sergundo: ");
//     console.log(peras);
// })
// .catch(function (error)
// {
//     console.log(error);
// })

//Llamamos a la función promesas con async y await
async function metodoAsyncAway()
{
    try
    {
        let resultado = await metodoPromesas(true);
        console.log(resultado);
        resultado = await metodoPromesas(false);
        console.log(resultado);
    }
    catch(manzanas)
    {
        console.log(manzanas);
    }
}

metodoAsyncAway();