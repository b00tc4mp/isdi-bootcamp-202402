import { logger } from '../utils/index.mjs';

import logic from '../logic';

import { useState, useEffect } from 'react';

import Post from './Post';

import { useContext } from '../context';

function PostList({ stamp, onEditButtonClicked }) {
    const { showFeedback } = useContext()

    const [posts, setPosts] = useState([])

    const loadPosts = () => {
        logger.debug('PostList -> loadPosts')

        try {
            logic.retrievePosts()
                .then(setPosts)
                .catch(error => showFeedback(error.message, 'error'))
        } catch (error) {
            showFeedback(error.message)
        }
    }

    useEffect(() => {
        loadPosts()
    }, [stamp])

    const handlePostDeleted = () => loadPosts()

    const handleEditPost = post => onEditButtonClicked(post)

    logger.debug('PostList -> render')

    return <section className="post-section">
        {posts.map(post => <Post
            key={post.id}
            item={post}
            onEditClick={handleEditPost}
            onDeleted={handlePostDeleted} />)}
    </section>
}


export default PostList