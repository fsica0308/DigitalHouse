const bicicletas = require('./datosBici.js');

let dhBici = {
    bicicletas: bicicletas,
    buscarBici: function(id){
        let unaVariable = this.bicicletas.filter((bici) => bici.id === id)
        if (unaVariable.length != 0) {
            return unaVariable[0];
        } else {
            return null;
        }
    },
    venderBici: function(id){
        let bicicleta = this.buscarBici(id)
        if (bicicleta == null) {
            return "Bicicleta no encontrada"
        } else {
            bicicleta.vendida = true
            return bicicleta
        }
    }
}

console.log(dhBici.buscarBici(1));