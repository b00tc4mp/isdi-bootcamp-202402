import utils from '../utils.mjs'
import logic from '../logic.mjs'
import { Component } from "react"


class Home extends Component {
    constructor() {
        super()

    }

    render() {
        let user
        try {
            user = logic.getUser()
        } catch (error) {
            utils.showFeedback(error)
        }

        const posts = logic.retrievePostsLatestFirst()
        const postList = posts.map(post => {
            return <article className='post'>
                <h3 className='post-author'>{post.author.username}</h3>
                <img src={post.image} alt="" />
                <div className='post-caption'>
                    <p>{post.caption}</p>
                </div>
                <time>{post.date}</time>
            </article>
        })
        return <main>
            <header id='header'>
                <h3>Isdigram</h3>

                <button onClick={event => {
                    event.preventDefault()

                    this.props.onChatClick()
                }}>Chat</button>
            </header>

            <h1>hello, {user.name}!</h1>

            <section className="post-section">
                {postList}
            </section>

            <footer className="footer">
                <button>home</button>
                <button>+</button>
                <button onClick={event => {
                    event.preventDefault()
                    this.props.onUserPageClick()
                }} >user</button>

            </footer>


        </main>
    }
}

export default Home