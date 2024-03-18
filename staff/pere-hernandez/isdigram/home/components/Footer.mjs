

import Button from "../../core/Button.mjs"
import Component from "../../core/Component.mjs"
import Image from "../../core/Image.mjs"

class Footer extends Component{
    constructor(){
        super('footer')
        
        const createPostButton = new Button
        createPostButton.setId('create-post-button')

        const createPostImage = new Image
        createPostImage.setSource('../add-circle-fill-system.256x256.png')
        createPostImage.setId('create-post-img')

        createPostButton.add(createPostImage)

        this.add(createPostButton)

        this._createPostButton = createPostButton
    }

    onCreatePostClick(callback) {
        //validation

        if (typeof callback !== 'function')
            alert('callback is not a function')

        //logic

        this._createPostButton.onClick(callback)
    }

    onCreatePostClick(callback){
        this._createPostButton.onClick(callback)
    }
}

export default Footer