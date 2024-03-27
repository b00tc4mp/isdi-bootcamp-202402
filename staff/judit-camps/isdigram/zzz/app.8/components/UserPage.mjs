import logic from "../logic.mjs";
import Button from "./core/Button.mjs";
import Component from "./core/Component.mjs";

class UserPage extends Component {
    constructor() {
        super('section')

        const changePasswordButton = new Button
        changePasswordButton.setText('change password')

        const logOutButton = new Button
        logOutButton.setText('log out')

        logOutButton.onClick(() => {
            logic.logoutUser()
            this._onLogoutClickCallback()
        })

        this.add(changePasswordButton, logOutButton)

        this._onLogoutClickCallback = null
    }

    onLogoutClick(callback) {
        if (typeof callback !== 'function') throw new TypeError('callback is not a function')

        this._onLogoutClickCallback = callback
    }

}

export default UserPage