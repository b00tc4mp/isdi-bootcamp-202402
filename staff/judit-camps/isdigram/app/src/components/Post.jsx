import { logger, showFeedback } from "../utils";

import logic from "../logic.mjs";

import { Component } from "react";

class Post extends Component {
    constructor() {
        logger.debug('Post')
        super()
    }

    handleDeleteClick = postId => {
        if (confirm('Do you want to delete this post?')) {
            try {
                logic.removePost(postId)

                this.props.onDeleted()
            } catch (error) {
                showFeedback(error)
            }
        }
    }

    handleEditClick = post => this.props.onEditClick(post)

    render() {
        const { item: post } = this.props

        return <article className='post'>
            <h3 className='post-author'>{post.author.username}</h3>
            <img src={post.image} alt="" />
            <div className='post-caption'>
                <p>{post.caption}</p>

                {post.author.id === logic.getLoggedInUser() &&
                    <div>
                        <button onClick={() => this.handleEditClick(post)}>edit</button>
                        <button onClick={() => this.handleDeleteClick(post.id)}>delete</button>
                    </div>}
            </div>
            <time>{post.date}</time>
        </article>
    }
}

export default Post