import Component from "../../core/Component.mjs"
import Button from "../../core/Button.mjs"

class Menu extends Component {
    constructor() {
        Component.call(this, 'nav')

        const chatButton = new Button
        chatButton.setText('chat')

        exitButton.onClick(function () {
            logic.logoutUser()

            location.href = '../login'
        })

        this.add(chatButton, exitButton)
    }
}

export default Menu
