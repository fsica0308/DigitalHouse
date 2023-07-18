let autosImportados = require('./etapa-1.js');

let concesionaria = {
   autos: autosImportados,
   buscarAuto: function(patente){
       let autoPatente = this.autos.find((car) => car.patente == patente);
       if (autoPatente == null) {
        return null;
       } else {
        return autoPatente;
       }
   },
   venderAuto: function(patente){
    let autoVendido = this.buscarAuto(patente)
    if (autoVendido == null) {
        return "Auto no encontrado"
    } else {
        autoVendido.vendido = true
        return autoVendido
    }
    }
};

console.log(concesionaria.buscarAuto("APL123"));