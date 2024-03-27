import utils from "../utils.mjs"

import logic from "../logic.mjs"

import Component from "../components/core/Component.mjs"
import Form from "../components/core/Form.mjs"
import Input from "../components/core/Input.mjs"
import Label from "../components/core/Label.mjs"
import Link from "../components/core/Link.mjs"
import Button from "../components/core/Button.mjs"


class Register extends Component {
    constructor() {
        super('main')

        const title = new Component('h1')
        title.setText('Register')

        const form = new Form

        const nameLabel = new Label
        nameLabel.setFor('name')
        nameLabel.setText('name')
        const nameInput = new Input
        nameInput.setType('text')
        nameInput.setPlaceholder('name')


        const birthdateLabel = new Label
        birthdateLabel.setFor('birthdate')
        birthdateLabel.setText('birthdate')
        const birthdateInput = new Input
        birthdateInput.setType('date')

        const emailLabel = new Label
        emailLabel.setFor('email')
        emailLabel.setText('email')
        const emailInput = new Input
        emailInput.setType('email')
        emailInput.setPlaceholder('email')



        const usernameLabel = new Label
        usernameLabel.setFor('username')
        usernameLabel.setText('username')
        const usernameInput = new Input
        usernameInput.setType('text')
        usernameInput.setPlaceholder('username')



        const passwordLabel = new Label
        passwordLabel.setFor('password')
        passwordLabel.setText('password')
        const passwordInput = new Input
        passwordInput.setType('password')
        passwordInput.setPlaceholder('password')

        const registerButton = new Button
        registerButton.setText('register')
        registerButton.setType('submit')

        form.onSubmit((event) => {
            event.preventDefault()

            const name = nameInput.getValue()
            const birthdate = birthdateInput.getValue()
            const email = emailInput.getValue()
            const username = usernameInput.getValue()
            const password = passwordInput.getValue()

            try {
                logic.registerUser(name, birthdate, email, username, password)

                form.reset()

                this._onUserRegisteredCallback()
            } catch (error) {
                utils.showFeedback(error)
            }

        })

        form.add(nameLabel, nameInput, birthdateLabel, birthdateInput, emailLabel, emailInput, usernameLabel, usernameInput, passwordLabel, passwordInput, registerButton)


        const phrase = new Component('p')
        phrase.setText('Already have an account')
        const loginLink = new Link
        loginLink.setText('Login')
        loginLink.setHref('')

        loginLink.onClick(event => {
            event.preventDefault()

            this._onRegisterClickCallback()
        })

        this.add(title, form, phrase, loginLink)

        this._onRegisterClickCallback = null
        this._onUserRegisteredCallback = null
    }

    onRegisterClick(callback) {
        if (typeof callback !== 'function') throw new TypeError('callback is not a function')

        this._onRegisterClickCallback = callback
    }

    onUserRegistered(callback) {
        if (typeof callback !== 'function') throw new TypeError('callback is not a function')

        this._onUserRegisteredCallback = callback
    }


}


export default Register
