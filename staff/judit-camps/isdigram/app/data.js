// DATA
var data = (function () {
    // helper
    function generateId() {
        return (+((parseInt(Math.random() * 10 ** 17)).toString())).toString(16)
    }

    function loadUsers() {
        return JSON.parse(localStorage.users || '[]')
    }

    function loadPosts() {
        return JSON.parse(localStorage.posts || '[]')
    }

    function saveUsers() {
        localStorage.users = JSON.stringify(users)
    }

    function savePosts() {
        localStorage.posts = JSON.stringify(posts)
    }


    function findUser(callback) {
        // save the actual users passing them from string to an array. 
        // if there are still no users => []
        var users = loadUsers()

        // get the user that we are looking for
        var user = users.find(callback)

        return user
    }

    function insertUser(user) {
        // get the users we have now as an array
        var users = loadUsers()

        // push the new user into the array
        users.push(user)

        // convert users array to string and save it in the localStorage
        saveUsers()
    }

    function insertPost(post) {
        var posts = loadPosts()

        posts.push(post)

        savePosts()
    }

    function getAllPosts() {
        var posts = loadPosts()

        return posts
    }

    function deletePost(idToDelete) {
        var posts = loadPosts()

        var arrayIds = posts.map(function (x) {
            return x.id
        })
        var indexToDelete = arrayIds.indexOf(parseInt(idToDelete))
        console.log(indexToDelete)

        posts.splice(indexToDelete, 1)


        savePosts()
    }



    return {
        findUser: findUser,
        insertUser: insertUser,
        insertPost: insertPost,
        getAllPosts: getAllPosts,
        deletePost: deletePost
    }

})()