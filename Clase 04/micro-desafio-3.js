let palabra = "perRo";
let mensaje;
let mayus = palabra.toUpperCase();

switch(mayus){
    case "PERRO":
        mensaje = "dog";
        break;
    case "GATO":
        mensaje = "cat";
        break;
    case "PUERTA":
        mensaje = "door";
        break;
    case "VENTANA":
        mensaje = "window";
        break;
    case "MESA": 
        mensaje = "table";
        break;      
    default:
        mensaje = "La palabra ingresada es incorrecta";
        break;
}

console.log(mensaje);