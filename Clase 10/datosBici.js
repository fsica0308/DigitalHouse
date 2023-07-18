const fs = require('fs');

function importBike(){
    let contenido = fs.readFileSync('./bicicletas.json', 'utf-8');
    let bicicletas = JSON.parse(contenido);
    return bicicletas;
};

let mostrarResultado = importBike();
console.log(mostrarResultado);

module.exports = mostrarResultado;