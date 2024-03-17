import Component from '../../core/Component.mjs'
import Button from '../../core/Button.mjs'

class Footer extends Component {
    constructor() {
        super('footer')

        //el super hereda de componente todas sus propiedades y metodos

        this.addClass('footer')

        // le damos una clase

        const createPostButton = new Button
        createPostButton.setText('➕')

        // instanciamos y seteamos

        this.add(createPostButton)

        this._createPostButton = createPostButton

        // lo agregamos como propiedad interna
    }

    onCreatePostClick(callback) {
        this._createPostButton.onClick(callback)
    }
}

export default Footer