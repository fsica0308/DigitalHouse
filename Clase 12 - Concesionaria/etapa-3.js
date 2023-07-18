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
   }
};

console.log(concesionaria.buscarAuto("APL123"));