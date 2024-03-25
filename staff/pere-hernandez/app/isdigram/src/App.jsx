import logic from './logic.mjs'

import { Component } from 'react'

import Landing from './pages/Landing.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'

class App extends Component {
  constructor(){
    super()

    const online = logic.checkLoggedInStatus()

    if (!online)
      this.state = {view: 'landing'}
    else
      this.state = {view: 'home'}
  }

  render(){
    if (this.state.view === 'landing')
      return <Landing 
        onRegisterClick={() => this.setState({ view: 'register' })}        
        onLoginClick={() => this.setState({ view: 'login' })}
      />
    
    else if (this.state.view === 'register')
      return <Register 
        onLoginClick={() => this.setState({ view: 'login' })}
        onRegistered={() => this.setState({ view: 'login' })}
      />

    else if (this.state.view === 'login')
      return <Login 
        onRegisterClick={() => this.setState({ view: 'register' })}
        onUserLoggedIn={() => {
          this.setState({ view: 'home' })
        }}
      />

    else if (this.state.view === 'home')
      return <Home 
        onLogout={() => this.setState({ view: 'login' })}
      />

    else{
      return <h1>Algo salió mal 😓</h1>
    }
  }
}

export default App