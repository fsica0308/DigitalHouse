let autosImportados = require('./etapa-1.js');

let concesionaria = {
   autos: autosImportados,
   marcarVendido: function(patente){
    let autoVendido = this.buscarPatente(patente)
    if (autoVendido == null) {
        return "Auto no encontrado"
    } else {
        autoVendido.vendido = true
        return autoVendido
    }
    }
};

console.log(concesionaria.buscarPatente("APL123"));
console.log(concesionaria.marcarVendido("APL123"));