//utils

function block (millis) {
    var before = Date.now()
    //for (;Date.now() - before < 3000);
    while(Date.now() - before < millis);
}

/*
** bloquea la ejecución de un programa durante un tiempo específico 
crea un bucle que continua ejecutandose mientras el tiempo actual menos el tiempo inicial 
cuando el tiempo termina el control vuelve al programa principal
*/