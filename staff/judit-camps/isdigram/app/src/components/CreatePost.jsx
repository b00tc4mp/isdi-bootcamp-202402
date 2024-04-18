import { logger } from '../utils';

import logic from '../logic';

import './CreatePost.sass'

import { useContext } from '../context'

function CreatePost({ onPostCreated, onCancelClick }) {
    const { showFeedback } = useContext()
    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const image = form.image.value
        const text = form.text.value

        try {
            logic.createPost(image, text)
                .then(() => {

                    form.reset()

                    onPostCreated()
                })
                .catch(showFeedback(error.message, 'error'))
        } catch (error) {
            showFeedback(error.message)
        }
    }

    const handleCancelClick = () => onCancelClick()

    logger.debug('CreatePost -> render')
    return <section className="create-post">

        <form onSubmit={handleSubmit}>
            <label>Image</label>
            <input id="image" type="text" />

            <label htmlFor="">Text</label>
            <input id="text" type="text" />

            <button type="submit">Create post</button>
        </form>

        <button onClick={handleCancelClick}>Cancel</button>
    </section>
}

export default CreatePost