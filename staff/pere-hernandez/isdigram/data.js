// data

var data = (function () {
    function findUser(callback) {
        var users = JSON.parse(localStorage.users || '[]')

        var user = users.find(callback)

        return user
    }


    function insertUser(user) {
        var users = JSON.parse(localStorage.users || '[]')

        users.push(user)

        localStorage.users = JSON.stringify(users)
    }


    function insertPost(post) {
        var posts = JSON.parse(localStorage.posts || '[]')

        posts.push(post)

        localStorage.posts = JSON.stringify(posts)
    }


    /*function deleteUser(user) {
        var users = JSON.parse(localStorage.users)

        var result = users.filter(function (x){
            x.username !== user.username
        })

        localStorage.users = JSON.stringify(result)
    }*/


    return {
        findUser: findUser,
        insertUser: insertUser,
        insertPost: insertPost
    }
    
})()

