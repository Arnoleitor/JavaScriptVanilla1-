let dias=prompt("introduce el dia");

// do {
    
// } while (dias != 'lunes' && 'martes' && 'miercoles' && 'jueves' && 'viernes ' && 'sabado' && 'domingo');

switch (dias) {
    case "lunes":
        alert("Lunes es laborable");
        break;

    case "martes":
        alert("martes es laborable");
        break;

    case "miercoles":
        alert("miercoles es laborable");
        break;

    case "jueves":
        alert("jueves es laborable");
        break;

    case "viernes":
        alert("viernes es laborable");
        break;

    case "sabado":
        alert("sabado es laborable");
        break;

    case "domingo":
        alert("domingo no es laborable");
        break;

    default:
        alert("Ese dia no existe");
        break;
}



