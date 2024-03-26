import utils from "../../utils.mjs";
import logic from "../../logic.mjs";

import { Component } from "react";

class PostList extends Component {
    constructor() {
        super()

        try {
            const posts = logic.retrievePostsLatestFirst()
            this.state = {
                posts
            }
        } catch (error) {
            utils.showFeedback(error)
        }
    }

    componentWillReceiveProps(newProps) {
        console.log(this.props, newProps)

        if (newProps.refreshStamp !== this.props.stamp) {
            try {
                const posts = logic.retrievePostsLatestFirst()

                this.setState({ posts })
            } catch (error) {
                utils.showFeedback()
            }
        }
    }

    render() {
        return <section className="post-section">
            {this.state.posts.map(post =>
                <article key={post.id} className='post'>
                    <h3 className='post-author'>{post.author.username}</h3>
                    <img src={post.image} alt="" />
                    <div className='post-caption'>
                        <p>{post.caption}</p>

                        {post.author.id === logic.getLoggedInUser() &&
                            <div>
                                <button onClick={() => { this.props.onEditButtonClicked(post) }}>edit</button>

                                <button onClick={() => {
                                    if (confirm('Do you want to delete this post?')) {
                                        console.log('post to be deleted: ' + post.caption)

                                        logic.removePost(post.id)
                                        this.props.onPostDeleted()
                                    }
                                }}>delete</button>
                            </div>}
                    </div>
                    <time>{post.date}</time>
                </article>
            )}
        </section>

    }
}


export default PostList