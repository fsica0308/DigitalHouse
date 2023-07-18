const perfil = "Administrador";
let mensaje;

switch(perfil){
    case " ":
        mensaje = "Debe especificar el perfil del usuario";
        break;
    case "administrador":
    case "ADMINISTRADOR":
    case "Administrador":    
        mensaje = "Usted tiene todos los privilegios de uso del sistema";
        break;
    case "asistente": 
    case "ASISTENTE":
    case "Asistente":
        mensaje = "Usted solo tiene permisos de registrar, modificar y consultar datos";
        break;
    case "invitado":
    case "INVITADO":
    case "Invitado":
        mensaje = "Usted solo tiene permisos de consultar datos";
        break;
    default:
        mensaje = "Debe especificar un perfil valido";
        break;            
}   

console.log(mensaje);