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

    function loadChats(){
        return JSON.parse(localStorage.chats || '[]')
    }

    function saveChats(chats){
        localStorage.chats = JSON.stringify(chats)
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

    function updateUser(user) {
        var users = loadUsers()

        var index = users.findIndex(function (user2) {
            return user2.id === user.id
        })


        if (index > -1){
            users. splice(index, 1, user)
        }

        saveUsers(users)
    }
    

    function getAllUsers(){
        var users = loadUsers()

        return users
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



    //Chat-related data

    function findChat(callback) {
        var chats = loadChats()

        var chat = chats.find(callback)

        return chat
    }


    function insertChat(chat) {
        var chats = loadChats()

        chat.id = generateId()

        chats.push(chat)

        saveChats(chats)
    }


    function updateChat(chat) {
        var chats = loadChats()

        var index = chats.findIndex(function (chat2) {
            return chat2.id === chat.id
        })


        if (index > -1){
            chats.splice(index, 1, chat)
        }

        saveChats(chats)
    }



    return {
        findUser: findUser,
        insertUser: insertUser,
        insertPost: insertPost,
        updateUser: updateUser,
        getAllUsers: getAllUsers,
        findPost: findPost,
        getAllPosts: getAllPosts,
        deletePost: deletePost,
        findChat: findChat,
        insertChat: insertChat,
        updateChat: updateChat
    }
    
})()

