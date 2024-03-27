import { logger, showFeedback } from '../utils'

import logic from '../logic'

import { Component  } from 'react'

class PostList extends Component {
    constructor() {
        logger.debug('PostList')

        super()

        this.state = { post : []}
    }

    loadPosts() {
        logger.debug('PostList -> loadPosts')

            try {
                const posts = logic.retrievePosts()

                this.setState({ posts })
            } catch (error) {
                showFeedback(error)
            }
        }

        componentWillReceiveProps(newProps) {
            logger.debug('postList-> componentWillReceiveProps', JSON.stringify(this.props), JSON.stringify(newProps))
            console.log(this.props, newProps)

           // if(newProps.refreshStamp !== this.props.stamp) this.loadPosts() 
           newProps.stamp !== this.props.stamp && this.loadPosts()
        }

        componentDidMount(){
            logger.debug('postList -> componentDidMount')

            this.loadPosts()
        }

        handlePostDeleted = () => this.loadPosts()

        handleEditClick = post => this.props.onPostClick(post)
            
        render(){
            logger.debug('postList -> render')
            return <section>
                {this.state.posts.map(post => <Post key={post.id} item={post} onEditClick={this.handleEditClick} onDeleted={this.handlePostDeleted}/>)}
            </section>
        }

    }
    export default PostList