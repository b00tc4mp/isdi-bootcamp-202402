class Login extends React.Component {
    constructor() {
        super()
    }

    render() {
        return <main>
            <h1>Login</h1>

            <form onSubmit={function (event) {
                event.preventDefault()

                console.log('hola mundo', this)
            }}>
                <label>Username</label>
                <input id="username" />
                <label>Password</label>
                <input type="password" id="password" />
                <button className="round-button" type="submit">Login</button>
            </form>

            <a href="">Register</a>
        </main>
    }
}