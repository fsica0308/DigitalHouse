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
    },
    autosParaLaVenta: function(){
        let listaAutos = this.autos.filter((car) => car.vendido == false);
        return listaAutos;
    },
    autosNuevos: function(){
        let listaAutosNuevos = this.autosParaLaVenta().filter((car) => car.km < 100);
        return listaAutosNuevos;
    },
    listaDeVentas: function(){
        let autosVendidos = this.autos.filter((car) => car.vendido == true);
        let precioVentas = autosVendidos.map(function(item){
            return item.precio;
        });
        return precioVentas;
    }
};

console.log(concesionaria.listaDeVentas());