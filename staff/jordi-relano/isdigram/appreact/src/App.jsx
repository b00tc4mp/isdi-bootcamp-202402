import { Component } from 'react'
import logic from './logic'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Chat from './components/Chat'

class App extends Component {
    constructor() {
        super();


        this.state = { view: logic.isUserLoggedIn() ? 'home' : 'landing' }
        //asignamos un objeto de estado a app, le indicamos con la propiedad view si el usuario está registrado o no. Es decir, si lo está nos metes en home, sino dale a landing de vuelta
    }

    goToLogin = () => this.setState({ view: 'login' });

    handleLoginClick = () => this.goToLogin();

    handleRegisterClick = () => this.setState({ view: 'register' });

    handleUserLoggedIn = () => this.setState({ view: 'home' });

    handleUserLoggedOut = () => this.goToLogin();

    render() {
        if (this.state.view === 'landing')
            return <Landing onLoginClick={this.handleLoginClick} onRegisterClick={this.handleRegisterClick} />
        else if (this.state.view === 'login')
            return <Login onRegisterClick={this.handleRegisterClick} onUserLoggedIn={this.handleUserLoggedIn} />
        //
        else if (this.state.view === 'register')
            return <Register onLoginClick={this.handleLoginClick} onUserRegistered={this.handleLoginClick} />
        else if (this.state.view === 'home')
            return <Home onChatClick={() => this.setState({ view: 'chat' })} onLogoutClick={this.handleUserLoggedOut} /> // new Home().render(...)
        else if (this.state.view === 'chat')
            return <Chat onChatClick={this.handleUserLoggedIn} /> // new 
        else
            return <h1>🤡</h1>



    }
}

export default App

