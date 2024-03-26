import { logger, showFeedback } from '../utils'

import logic from '../logic'

import { Component } from 'react'

class PostList extends Component {
    constructor() {
        logger.debug('PostList')

        super()

        try {
            const posts = logic.retrievePosts()

            this.state = { posts }
        } catch (error) {
            showFeedback(error)
        }
    }

    componentWillReceiveProps(newProps) {
        logger.debug('PostList -> componentWillReceiveProps', JSON.stringify(this.props), JSON.stringify(newProps))

        if (newProps.refreshStamp !== this.props.stamp) {
            try {
                const posts = logic.retrievePosts()

                this.setState({ posts })
            } catch (error) {
                showFeedback(error)
            }
        }
    }

    render() {
        logger.debug('PostList -> render')

        return <section>
            {this.state.posts.map(post => <article key={post.id}>
                <h3>{post.author.username}</h3>

                <img src={post.image} />

                <p>{post.text}</p>

                <time>{post.date}</time>
            </article>)}
        </section>
    }
}

export default PostList