import { logger } from '../utils';

import { Link } from 'react-router-dom';

import logic from '../logic';

import { useContext } from '../context';

function Post({ item: post, onDeleted, onEditClick }) {
    const { showFeedback } = useContext()

    const handleDeleteClick = postId => {
        if (confirm('Do you want to delete this post?')) {
            try {
                logic.removePost(postId)
                    .then(() => onDeleted())
                    .catch(error => showFeedback(error.message, 'error'))


            } catch (error) {
                showFeedback(error.message)
            }
        }
    }

    const handleEditClick = post => onEditClick(post)

    logger.debug('Post -> Render')

    return <article className='post'>
        <h3 className='post-author'> <Link to={`/profiles/${post.author.username}`} >{post.author.username} </Link> </h3>
        <img className='post-image' src={post.image} alt="" />
        <div className='post-caption'>
            <p className='post-text' >{post.text}</p>

            {post.author.id === logic.getLoggedInUser() &&
                <div>
                    <button onClick={() => handleEditClick(post)}>edit</button>
                    <button onClick={() => handleDeleteClick(post.id)}>delete</button>
                </div>}
        </div>
        <time className='post-date' >{post.date}</time>
    </article>
}

export default Post