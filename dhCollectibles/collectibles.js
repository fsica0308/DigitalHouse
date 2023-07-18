const fs = require('fs');
const path = require('path');

let figuras = [];

function readJson(path) {
    const contenido = fs.readFileSync(path, 'utf-8');
    return JSON.parse(contenido);
}
function importar(marcaFiguras){ 
    switch (marcaFiguras) {
        case 'Hot Toys':
            figuras = readJson('./datos/figuras1.json');
            break;
        case 'Bandai':
            figuras = readJson('./datos/figuras2.json');
            break;
        case 'Star Wars':
            figuras = readJson('./datos/figuras3.json');
            break;
        default:
            break;
    }
    return figuras;
};

console.log(importar('Hot Toys'));
module.exports = figuras;