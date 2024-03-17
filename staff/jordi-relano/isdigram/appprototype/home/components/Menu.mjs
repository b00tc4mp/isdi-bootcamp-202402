import logic from '../../logic.mjs'

import Component from '../../core/Component.mjs'
import Button from '../../core/Button.mjs'

class Menu extends Component {
    constructor() {
        super('nav')

        const homeButton = new Button
        homeButton.setText('🏠')

        this._homeButton = homeButton

        // creamos un objeto, lo seteamos con lo que nos sale de la pija, y lo añadimos como propiedad de Menu

        const chatButton = new Button
        chatButton.setText('💬')

        this._chatButton = chatButton

        const exitButton = new Button
        exitButton.setText('🚪')

        exitButton.onClick(() => {
            logic.logoutUser()

            location.href = '../login'
        })
        // esto es para añadirlo al nav ( la función de Menu padre)
        this.add(chatButton, exitButton)
    }

    onChatClick(callback) {
        if (typeof callback !== 'function') throw new TypeError('callback is not a function')

        this._chatButton.onClick(() => {
            this.replace(this._chatButton, this._homeButton)

            // metemos evento de click, usamos replace para cambiar chatbutton por homebutton cuando cliquemos, y le metemos al callback para que pase a la función padre

            callback()
        })
    }

    onHomeClick(callback) {
        if (typeof callback !== 'function') throw new TypeError('callback is not a function')

        this._homeButton.onClick(() => {
            this.replace(this._homeButton, this._chatButton)

            callback()

        })

    }
}




export default Menu