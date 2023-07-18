/*
En etapa 9, primero auto luego persona... 😶‍🌫️
Este es como un easter egg para que tengan en cuenta (mas adelante salta error si no!)
Se van a dar cuenta cuando lleguen (y no lo dice en ningún lado)
*/

let autosImportados = require('./etapa-1.js');

let personas = [
    {
        nombre: "Juan",
        capacidadDePagoEnCuotas: 20000,
        capacidadDePagoTotal: 100000
    }
];

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
    },
    totalDeVentas: function(){
        let ventasAutos = this.listaDeVentas().reduce(function(acum, precio){
                return acum + precio;
            }, 0)
        return ventasAutos;     
    },
    puedeComprar: function(auto, persona){
        let puede = false;
        let cuota = auto.precio / auto.cuotas
        if ((auto.precio <= persona.capacidadDePagoTotal) && cuota <= persona.capacidadDePagoEnCuotas) {
            puede = true
        }
        return puede;
    }
};

console.log(concesionaria.puedeComprar(autosImportados[0], personas[0]));