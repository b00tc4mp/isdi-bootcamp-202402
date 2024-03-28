class Input extends Component {
    constructor() {
        super('input')
    }

    setType(type) {
        if (typeof type !== 'string') throw new TypeError('type is not a string')

        this._container.type = type
    }
}