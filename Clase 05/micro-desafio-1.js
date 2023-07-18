/*
1. Crea una carpeta de trabajo y dentro de ella crea un archivo JavaScript (.js).
2. Crea una función que permita calcular el monto a pagar por el alquiler de un
vehículo, que reciba como parámetros: “tipo de vehículo”, “Días de alquiler” y “silla
para bebe”.
3. Define y realiza los cálculos para obtener el total a pagar, teniendo en cuenta las
siguientes consideraciones:
● De acuerdo al tipo de vehículo, se le cobra al cliente un monto por día:
○ Compacto: $14000
○ Mediano: $17000
○ Camioneta: $28000
● Si adicionalmente el cliente requiere la silla para niños, se le cobra un adicional por día
de $1200
4. Una vez creado el programa, ejecutalo. ¿Recuerdas cómo?
5. Para probar las diferentes respuestas invoca a la función, asigna diferentes valores o
argumentos. Usando el console.log(), muestra los resultados al usuario:

“Estimado cliente: en base al tipo de vehículo compacto alquilado, considerando los 3 días
utilizados, el monto total a pagar es de $42000 ” .

Recuerda que si el cliente pidió la silla para niños debe también indicarlo en el mensaje final.
*/

function alquiler(tipo, dias, silla){
    let resultado = 0;
    let error = 0;
    switch(tipo){
        case "Compacto":
            if (silla == "Si"){
                resultado =  (14000 + 1200) * dias;
            } else {
                resultado =  14000 * dias;
            }
            break;
        case "Mediano":
            if (silla == "Si"){
                resultado =  (17000 + 1200) * dias;
            } else {
                resultado =  17000 * dias;
            }
            break;
        case "Camioneta":
            if (silla == "Si"){
                resultado =  (28000 + 1200) * dias;
            } else {
                resultado =  28000 * dias;
            }
            break;
        default:
            error = 1;
            break;
    }
    if (error == 1){
        return 'Ingrese valores validos';
    } else if (silla == "Si"){
        return 'Estimado cliente: en base al tipo de vehiculo ' + tipo + ' alquilado, considerando los ' + dias + ' dias utilizados, mas la silla para niños solicitada, el monto a pagar es de $' + resultado;
    } else {
        return 'Estimado cliente: en base al tipo de vehiculo ' + tipo + ' alquilado, considerando los ' + dias + ' dias utilizados, el monto a pagar es de $' + resultado;
    }
}

console.log(alquiler("Compacto", 5, "Si"));