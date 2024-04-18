import Button from "../components/core/Button.mjs";
import Component from "../components/core/Component.mjs";
import Form from "../components/core/Form.mjs";
import Input from "../components/core/Input.mjs";
import Link from "../components/core/Link.mjs";
import logic from "../logic.mjs";
import utils from "../utils.mjs"

class Login extends Component {
    constructor() {
        super('main')

        this.addClass('login')

        const title = new Component('h1')
        title.setText('Login')
        title.addClass('login-title')

        const form = new Form

        const usernameInput = new Input
        usernameInput.setType('text')
        usernameInput.setPlaceholder('username')
        usernameInput.addClass('login-input')


        const passwordInput = new Input
        passwordInput.setType('password')
        passwordInput.setPlaceholder('password')
        passwordInput.addClass('login-input')

        const loginButton = new Button
        loginButton.setType('submit')
        loginButton.setText('log in')
        loginButton.addClass('login-button')


        form.onSubmit((event) => {
            console.log('form submit login')
            event.preventDefault()

            const username = usernameInput.getValue()
            const password = passwordInput.getValue()

            try {
                logic.loginUser(username, password)
                form.reset()

                this._onUserLoggedInCallback()

            } catch (error) {
                utils.showFeedback(error)
            }

        })

        form.add(usernameInput, passwordInput, loginButton)

        const phrase = new Component('p')
        phrase.setText('If you do not have an account')
        const registerLink = new Link
        registerLink.setText('Register')
        registerLink.setHref('')
        registerLink.addClass('login-link')

        registerLink.onClick(event => {
            event.preventDefault()

            this._onRegisterClickCallback()
        })


        this.add(title, form, phrase, registerLink)

        this._onRegisterClickCallback = null
        this._onUserLoggedInCallback = null
    }

    onRegisterClick(callback) {
        if (typeof callback !== 'function') throw new TypeError('callback is not a function')

        this._onRegisterClickCallback = callback
    }

    onUserLoggedIn(callback) {
        if (typeof callback !== 'function') throw new TypeError('callback is not a function')

        this._onUserLoggedInCallback = callback
    }
}

export default Login