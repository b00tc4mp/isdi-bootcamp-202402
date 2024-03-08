// te viene de logic.js donde está ubicado localStorage.users = JSON.stringify(users) después de haber pusheado el username y todo.


// var users = localStorage.users ? JSON.parse(localStorage.users) : []

//here we have an array with all the information about the users, so 1 object for user

// var users = []
// if(localStorage.users){
//   users = JSON.parse(localStorage.users);
// }else {
//     return users;
// }

// helper, aquí creamos las funciones helpers para encapsular, sólo se realizan aquí dentro ( antes de empezar la función grande)

var data = (function () {
    // helper

    function generateId() {
        return (+((parseInt(Math.random() * 10 ** 17)).toString())).toString(36)
    }

    function loadUsers() {
        return JSON.parse(localStorage.users || '[]')
    }

    function loadPosts() {
        return JSON.parse(localStorage.posts || '[]')
    }

    function saveUsers(users) {
        localStorage.users = JSON.stringify(users)
    }

    function savePosts(posts) {
        localStorage.posts = JSON.stringify(posts)
    }

    // data

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

    function insertPost(post) {
        var posts = loadPosts()

        post.id = generateId()

        posts.push(post)

        savePosts(posts)
    }

    function getAllPosts() {
        var posts = loadPosts()

        return posts
    }

    function findPost(callback) {
        var posts = loadPosts()

        var post = posts.find(callback)

        return post
    }

    function deletePost(callback) {
        var posts = loadPosts()

        var index = posts.findIndex(callback)

        posts.splice(index, 1)

        savePosts(posts)
    }

    return {
        findUser: findUser,
        insertUser: insertUser,
        insertPost: insertPost,
        getAllPosts: getAllPosts,
        findPost: findPost,
        deletePost: deletePost
    }
})()