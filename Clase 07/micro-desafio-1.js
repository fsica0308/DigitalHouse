/*
El Tech Leader nos informa que debemos efectuar un código que permita calcular el saldo
de la cuenta de un cliente de la Institución Financiera. Tu responsabilidad será ir
ejecutando cada una de las siguientes consignas para lograr el objetivo:
1. Crear un array que contenga las operaciones bancarias realizadas por el cliente,
tomando en cuenta que los depósitos serán representados por valores positivos y
los retiros por valores negativos.
2. Crear una función (Callback) que reciba como parámetro el array creado. La función
tendrá la responsabilidad de calcular y devolver el saldo total de depósitos, el saldo
actual de retiros y el saldo actual del cliente.
3. Crear otra función que reciba como parámetros el nombre y el apellido del cliente así
como el array que contiene las operaciones bancarias. Esta función tendrá la
responsabilidad de retornar el nombre y apellido del cliente y el saldo total de
depósitos, el saldo actual de retiros y el saldo actual.
Una vez creado el programa, ejecutalo y para verificar los resultados solicitados, invoca a la
segunda función, asigna diferentes valores o argumentos. No olvides utilizar el console.log()
para mostrar los resultados al usuario, de acuerdo al siguiente mensaje:

Estimada Gloria Medina:
El monto total de los depósitos es de: $5500.
El monto total de los retiros es de: $15000.
Por lo tanto, su saldo actual en la cuenta es de: $40000.

*/

/*
let operaciones = [1000, 500, 14000, -1840, -950, 37000, -600];
let nombre = "Franco";
let apellido = "Sica";
let saldoDepositos = 0;
let saldoRetiros = 0;
let saldoActual = 0;

function totCliente (nombre, apellido, operaciones){
    return console.log("Estimad@ " + nombre + ' ' + apellido + ": \n" + "El monto total de los depositos es de: $" + saldoDepositos + ". \n" 
    + "El monto total de los retiros es de: $" + saldoRetiros + ". \n" + "Por lo tanto, su saldo actual en la cuenta es de: $" + saldoActual + ".");
};

function calcularSaldos (operaciones, callback){
    for(let i=0;i<operaciones.length;i++){
        if (operaciones[i] >= 0) {
            saldoDepositos = saldoDepositos + operaciones[i];
        } else {
            saldoRetiros = saldoRetiros + (operaciones[i] * -1);
        }
    };
    saldoActual = saldoDepositos - saldoRetiros;
    return callback(nombre, apellido, operaciones);
};


calcularSaldos(operaciones, totCliente);*/

let operaciones = [1000, 500, 14000, -1840, -950, 37000, -600];

function calcularSaldos (operaciones){
    let saldoDepositos = 0;
    let saldoRetiros = 0;
    let saldoActual = 0;
    for(let i=0;i<operaciones.length;i++){
        if (operaciones[i] >= 0) {
            saldoDepositos = saldoDepositos + operaciones[i];
        } else {
            saldoRetiros = saldoRetiros + operaciones[i] * -1;
        }
    };
    saldoActual = saldoDepositos - saldoRetiros;
    return [saldoDepositos, saldoRetiros, saldoActual];
};

let resultado = calcularSaldos(operaciones);

function imprimirMensaje (nombre, apellido, resultado){
    return console.log("Estimad@ " + nombre + ' ' + apellido + ": \n" + "El monto total de los depositos es de: $" + resultado[0] + ". \n" 
    + "El monto total de los retiros es de: $" + resultado[1] + ". \n" + "Por lo tanto, su saldo actual en la cuenta es de: $" + resultado[2] + ".");
};

imprimirMensaje("Franco", "Sica", resultado);
