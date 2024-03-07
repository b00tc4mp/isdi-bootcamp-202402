// data layer

var data = (function () {
    //helper

    function generateId() {
        return (+((parseInt(Math.random() * 10 ** 17)).toString())).toString(36)
    }

    function loadUsers(){
        return JSON.parse(localStorage.users || '[]')
    }

    function saveUsers(users){
        localStorage.users = JSON.stringify(users)
    }

    function loadPosts(){
        return JSON.parse(localStorage.posts || '[]')
    }

    function savePosts(posts){
        localStorage.posts = JSON.stringify(posts)
    }



    //data
    //User-related data

    function findUser(callback) {
        var users = loadUsers()

        var user = users.find(callback)

        return user
    }


    function insertUser(user) {
        var users = loadUsers()

        user.id = generateId()

        users.push(user)

        saveUsers(users)
    }


    /*function deleteUser(user) {
        var users = JSON.parse(localStorage.users)

        var result = users.filter(function (x){
            x.username !== user.username
        })

        localStorage.users = JSON.stringify(result)
    }*/



    //Post-related data

    function findPost(callback) {
        var posts = loadPosts()

        var post = posts.find(callback)

        return post
    }


    function insertPost(post) {
        var posts = loadPosts()

        post.id = generateId()

        posts.push(post)

        savePosts(posts)
    }


    function getAllPosts(){
        var posts = loadPosts()

        return posts
    }


    function deletePost (callback) {
        var posts = loadPosts()
        var index = posts.findIndex(callback)

        posts.splice(index, 1)

        savePosts(posts)
    }


    return {
        findUser: findUser,
        insertUser: insertUser,
        insertPost: insertPost,
        findPost: findPost,
        getAllPosts: getAllPosts,
        deletePost: deletePost
    }
    
})()

