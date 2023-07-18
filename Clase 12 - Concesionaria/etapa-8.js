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
    },
    totalDeVentas: function(){
        let ventasAutos = this.listaDeVentas().reduce(function(acum, precio){
                return acum + precio;
            }, 0)
        return ventasAutos;     
    }
};

console.log(concesionaria.totalDeVentas());

/*
    totalDeventas: function(){
        let ventasAutos = this.listaDeVentas()
        let totalVentas = {}
        if (ventasAutos.length != 0) {
            totalVentas = ventasAutos.reduce(function(acum, precio){
                return acum = acum + precio;
            }, 0)
        } else {
            totalVentas = 0;
        }
             
        return totalVentas;
    }*/
    
/*
totalDeventas: function(){
        let totalVentas = this.listaDeVentas().reduce((acum, precio) => acum + precio
        );
        return totalVentas;
    }
*/
/*
totalDeventas: function(){
        let totalVentas = this.listaDeVentas().reduce(function(acum, precio){
            return acum + precio;
        });
        return totalVentas;
    }
*/
/*
totalDeventas: function(){
    //     let ventasAutos = this.listaDeVentas()
         let totalVentas = this.listaDeVentas().reduce(function(acum, precio){
             return acum + precio;
         });
         return totalVentas;
     }*/