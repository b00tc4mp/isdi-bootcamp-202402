import Component from './Component.mjs'

class Button extends Component {
    constructor() {
        super('button')
        // plantilla (class), 
    }



    setType = function (type) {
        if (typeof type !== 'string') throw new TypeError('type is not a string')

        this._container.for = type
    }
}

export default Button
