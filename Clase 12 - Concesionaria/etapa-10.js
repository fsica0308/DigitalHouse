let autosImportados = require('./etapa-1.js');

let personas = [
    {
        nombre: "Juan",
        capacidadDePagoEnCuotas: 200000,
        capacidadDePagoTotal: 10000000
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
    },
    autosQuePuedeComprar: function(persona){
        let autosVenta = this.autosParaLaVenta()
        let posiblesAutos = []
        for (let i = 0; i < autosVenta.length; i++) {
            let puede = this.puedeComprar(autosVenta[i], persona)
            if (puede == true) {
                posiblesAutos.push(autosVenta[i])
            }
        }
    }/*
    autosQuePuedeComprar: function(persona){
        let autosVenta = this.autosParaLaVenta()
        let posiblesAutos = this.autosVenta.filter(function(venta){
            return venta.this.puedeComprar(autosVenta, persona)
        })
        return posiblesAutos
    }*/
};

console.log(concesionaria.autosQuePuedeComprar(personas[0]));