import Button from "../core/Button.mjs";
import Component from "../core/Component.mjs";
import Form from "../core/Form.mjs";
import Input from "../core/Input.mjs";
import Label from "../core/Label.mjs";
import Link from "../core/Link.mjs";
import logic from "../logic.mjs";
import utils from "../utils.mjs"

class Login extends Component {
    constructor() {
        super('main')

        const title = new Component('h1')
        title.setText('Login')

        const form = new Form

        const usernameInput = new Input
        usernameInput.setType('text')
        usernameInput.setPlaceholder('username')

        const passwordInput = new Input
        passwordInput.setType('password')
        passwordInput.setPlaceholder('password')

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

                location.href = '../home'

            } catch (error) {
                utils.showFeedback(error)
            }

        })

        form.add(usernameInput, passwordInput, loginButton)

        const phrase = new Component('p')
        phrase.setText('If you do not have an account')
        const link = new Link
        link.setText('Register')
        link.setHref('../register')

        this.add(title, form, phrase, link)
    }
}

export default Login