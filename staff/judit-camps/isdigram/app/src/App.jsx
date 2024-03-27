import { logger } from './utils'

import logic from './logic.mjs'

import { Component } from 'react'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Chat from './pages/Chat'
import User from './pages/User'


class App extends Component {
  constructor() {
    logger.debug('App')
    super()

    this.state = { view: logic.isUserLoggedIn() ? 'home' : 'landing' }
  }

  setState(state) {
    logger.debug('App -> setState', JSON.stringify(state))

    super.setState(state)
  }

  componentDidMount() {
    logger.debug('App -> componentDidMount')
  }

  goToLogin = () => this.setState({ view: 'login' })

  handleLoginClick = () => this.goToLogin()
  handleRegisterClick = () => this.setState({ view: 'register' })
  handleUserRegistered = () => this.goToLogin()
  handleUserLoggedIn = () => this.setState({ view: 'home' })
  handleUserLoggedOut = () => this.goToLogin()

  render() {
    if (this.state.view === 'landing')
      return <Landing onLoginClick={this.handleLoginClick} onRegisterClick={this.handleRegisterClick} />

    else if (this.state.view === 'login')
      return <Login onRegisterClick={this.handleRegisterClick} onUserLoggedIn={this.handleUserLoggedIn} />

    else if (this.state.view === 'register')
      return <Register onLoginClick={this.handleLoginClick} onUserRegistered={() => this.setState({ view: 'login' })} />

    else if (this.state.view === 'home')
      return <Home onChatClick={() => this.setState({ view: 'chat' })} onUserPageClick={() => this.setState({ view: 'user' })} />

    else if (this.state.view === 'user')
      return <User onLogoutClick={this.handleUserLoggedOut} onHomeClick={() => this.setState({ view: 'home' })} />

    else if (this.state.view === 'chat')
      return <Chat onHomeClick={() => this.setState({ view: 'home' })} />

    else
      return <h1>Error 404</h1>
  }

}

export default App


// onHomeClick={() => this.setState({ view: 'home' })} onBackToChatsClick={() => this.setState({ view: 'chat' })}