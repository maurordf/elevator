let piso = 0;   
let movimiento = false;

function irAlPiso(pisoDeseado) {
    this.piso = piso;
    piso = pisoDeseado;
    if (piso>105 || piso < -5){
        console.log ("piso inexistente");
    }
    else
    {
        movimiento = true;
        return "en camino al "+ piso;}
};

function stop () {
    if (movimiento===false){
        return "selecciona un piso primero";
    }else
    {
        return "Denteniendose";
    }
};
function cerrarPuerta(){
 if (movimiento===true){
     return "El elevador esta en movimiento, las puertas estan cerradas"
 } else
 {
    return "cerrando"
 };
};
function abrirPuerta(){
    if (movimiento===false){
        return "abriendo";
    } else
    {
        return "El elevador esta en movimiento, las puertas no pueden abrirse ahora";
    };
   };

function alarm () {
        return "¡SONANDO!";
};

function llamar () {
    return "¡LLAMANDO!";
};
console.log (irAlPiso(201));
console.log (abrirPuerta());