// utils

function block(millis) {
    var before = Date.now()

    // (;date.now() - before < 3000;)

    while (Date.now()- before < millis);
}