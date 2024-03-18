import Component from "../../core/Component.mjs"

import logic from "../../logic.mjs"

import Post from "./Post.mjs"

class Posts extends Component {
    constructor(){
        super('section')

        this.refresh()
    }

    refresh(){
        let posts        
        try {
            posts = logic.retrievePosts()

            this.removeAll()
        } catch (error) {
            alert(error.message)
        }    
        posts.forEach((post) => {
            const post1 = new Post(post) 
            this.add(post1)
        })          
    }

        
}

export default Posts