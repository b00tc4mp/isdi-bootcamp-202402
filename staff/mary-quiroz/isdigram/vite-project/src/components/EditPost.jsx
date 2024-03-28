import{ logger, showFeedback } from '../utils'

import logic from  '../logic'

import { Component } from 'react'
 
class EditPost extends Component {
    constructor() {
        logger.debug('EditPost')

        super()
    }

componentDidMount() {
    logger.debug('EditPost -> componentDidMount')
}

componentWillUnmount() {
    logger.debug('EditPost -> componentWillUnMount')
}

handleSubmit = event => {
    event.preventDefault()

    const form = event.target

    const text = form.text.value

    logger.debug('EditPost -> handleSubmit', text)

    try {
        logic.modifyPost(this.props.post.id,text)

        from.reset()

        this.props.onPostEdited()
    }catch(error) {
        showFeedback(error)
    }

}
handleCancelClick = () => this.props.onCancelClick()
render() {
    logger.debug('EditPost -> render')

    return <section className='edit-post'>
        <form onSubmit={this.handleSubmit}>
            <label>Text</label>
            <input id='text' type='text' defaultValue={this.props.post.text}/>
        </form>

        <button className='round-button submit-buton' onClick={this.handleCancelClick}></button>
    </section>
}
}

export default EditPost