function Input (){
    Component.call(this, 'input')
}

Input.prototype = Object.create(Component.prototype)
Input.prototype.constructor = Input

Input.prototype.setType = function (type) {
    //validation

    if (typeof type !== 'string')

    //logic
    this._container.type = type
}