function block(milliseconds) {
    var before = Date.now()
    //for (; Date.now() - before < 3000);
    while (Date.now() - before < milliseconds);
}

function showFeedback(error) {
    console.error(error)

    alert(error.message)
}

const utils = {
    showFeedback
}

export default utils