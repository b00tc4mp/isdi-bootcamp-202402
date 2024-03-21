import Component from "../../core/Component.mjs"

import Logo from "../../core/Logo.mjs"
import Button from "../../core/Button.mjs"

import logic from "../../logic.mjs"

class Header extends Component {
    constructor(){
        super('header')

        const logo = new Logo
        logo.setId('logo')

        const logoutButton = new Button
        logoutButton.setText('Logout')
        logoutButton.setId('logout-button')

        logoutButton.onClick(() => {
            logic.logoutUser()

            location.href = '../login'
        })

        this.add(logo, logoutButton)
    }
}

export default Header