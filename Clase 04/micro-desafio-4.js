let numero1 = 5;
let numero2 = 10;
let operacion = "multiplicar";
let resultado;

switch(operacion){
    case "sumar":
        mensaje = "sumar ";
        resultado = numero1 + numero2;
        break;
    case "restar":
        mensaje = "restar ";
        resultado = numero1 - numero2;
        break;
    case "multiplicar":
        mensaje = "multiplicar ";
        resultado = numero1 * numero2;
        break;
    case "dividir":
        mensaje = "dividir ";
        resultado = numero1 / numero2;
        break;
    default:
        mensaje = "Las operaciones aceptadas son: sumar - restar - multiplicar - dividir";
        break;
}

if (mensaje != "Las operaciones aceptadas son: sumar - restar - multiplicar - dividir"){
    console.log("El resultado de " + mensaje + numero1 + " y " + numero2 + " es " + resultado);
} else {
    console.log(mensaje);
}
