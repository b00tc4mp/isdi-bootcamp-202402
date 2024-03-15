import Component from "./Component.mjs"

class Button extends Component {
    constructor (){
        super('button')
    }

    setType (type) {
        //validation

        if (typeof type !== 'string')
            throw new TypeError ('type is not a strig')

        //logic

        this._container.for = type
    }
}

export default Button