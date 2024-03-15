class Posts extends Component {
    constructor() {
        super('section')

        const posts = logic.retrievePostsLatestFirst()

        posts.forEach((post) => {
            let post2 = new Post(post)

            this.add(post2)
        })
    }
}