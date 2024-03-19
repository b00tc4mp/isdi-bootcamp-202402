import Button from "../core/Button.mjs";
import Component from "../core/Component.mjs";
import Form from "../core/Form.mjs";
import Input from "../core/Input.mjs";
import logic from "../logic.mjs";

class LoginForm extends Component {
    constructor() {
        super('section')

        const form = new Form

        const usernameInput = new Input
        usernameInput.setType('text')

        const passwordInput = new Input
        passwordInput.setType('password')

        const loginButton = new Button
        loginButton.setType('submit')
        loginButton.setText('log in')


        form.onSubmit((event) => {
            console.log('form submit login')
            event.preventDefault()

            const username = usernameInput.getValue()
            const password = passwordInput.getValue()

            try {
                logic.loginUser(username, password)
                form.reset()

                this._onLoginCompletedCallback()
            } catch (error) {
                showFeedback(error)
            }
        })
        this._onLoginCompletedCallback = null

    }

    onLoginCompleted(callback) {
        if (typeof callback !== 'function') throw new TypeError('callback is not a function')

        console.log(callback)
        this._onLoginCompletedCallback = callback
    }
}

export default LoginForm