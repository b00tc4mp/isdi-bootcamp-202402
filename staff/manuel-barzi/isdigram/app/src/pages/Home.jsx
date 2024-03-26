import { logger, showFeedback } from '../utils'

import logic from '../logic'

import { Component } from 'react'
import PostList from '../components/PostList'
import CreatePost from '../components/CreatePost'

class Home extends Component {
    constructor() {
        logger.debug('Home')

        super()

        try {
            const user = logic.retrieveUser()

            this.user = user

        } catch (error) {
            showFeedback(error)
        }

        this.state = { view: null, stamp: null }
    }

    setState(state) {
        logger.debug('Home -> setState', JSON.stringify(state))

        super.setState(state)
    }

    render() {
        logger.debug('Home -> render')

        return <main className="main">
            <h1>Hello, {this.user.name}!</h1>

            <nav>
                <button>💬</button>
                <button>🚪</button>
            </nav>

            <PostList refreshStamp={this.state.stamp} />

            {this.state.view === 'create-post' && <CreatePost onCancelClick={() => this.setState({ view: null })} onPostCreated={() => this.setState({ view: null, stamp: Date.now() })} />}

            <footer className="footer">
                <button onClick={() => this.setState({ view: 'create-post' })}>➕</button>
            </footer>
        </main>
    }
}

export default Home