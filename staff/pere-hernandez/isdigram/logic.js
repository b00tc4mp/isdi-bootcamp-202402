// business (logic)

var logic = (function () {

    //USER-related functions
    
    function registerUser(username, email, password, confirmedPassword){
        //errors
        if (typeof username !== 'string')
            throw new TypeError (username + ' is not a string')
        if (typeof username.length < 1)
            throw new RangeError ('username must have more characters')

        //TODO email validation

        if (typeof password !== 'string')
            throw new TypeError (password + ' is not a string')
        if (typeof password.length < 1)
            throw new RangeError ('password must have more characters')
        if (typeof confirmedPassword !== 'string')
            throw new TypeError (confirmedPassword + ' is not a string')
        if (typeof confirmedPassword.length < 1)
            throw new RangeError ('confirmedPassword must have more characters')
        if (password !== confirmedPassword)
            throw new Error ("passwords don't match")

        //logic

        var foundUser = data.findUser(function (user) {
            return (user.email === email || user.username === username)
        })

        if (foundUser) throw new Error ('user already exists')

        var user = {
            email: email,
            username: username,
            password: password,
            statusbar: 'offline'
        }

        data.insertUser(user)
    } 


    function loginUser (username, password){
        var user = data.findUser(function (user){
            return user.username === username && user.password === password
        })

        if (!user) throw new Error ('wrong credentials')

        user.status = 'online'

        data.updateUser(user)

        sessionStorage.userId = user.id
    }


    function retrieveUser (){
        var user = data.findUser(function(user){
            return user.id === sessionStorage.userId
        })

        if (!user) throw new Error('user not found')

        return user
    }

    
    function retrieveUsers(){
        var users = data.getAllUsers()

        var index = users.findIndex(function (user) {
            return user.id === sessionStorage.userId
        })

        users.splice(index, 1)

        users.forEach(function (user) {
            delete user.email
            delete user.password
        })

        users.sort(function (x, y) {
            return x.username < y.username ? -1 : 1
        }).sort(function(x, y) {
            return x.status > y.status ? -1 : 1
        })

        return users
    }


    function logoutUser(){
        var user = data.findUser(function (user) {
            return user.id === sessionStorage.userId
        })

        if (!user){
            throw new Error('wrong credentials')
        }

        user.status = 'offline'

        data.updateUser(user)

        delete sessionStorage.userId
    }


    function getLoggedInUserId () {
        return sessionStorage.userId
    }

    function checkLoggedInStatus(){
        return !!sessionStorage.userId
    }



    //POST-related functions    

    function createPost (photo, comment){       

        var post = {
            author: sessionStorage.userId,
            photo: photo,
            comment: comment,
            date: new Date().toLocaleDateString('en-CA')
        }

        data.insertPost(post)
    }


    function retrievePosts(){
        var posts = data.getAllPosts()
        
        posts.forEach(function (post) {
            var user = data.findUser(function (user) {
                return user.id === post.author
            })

            post.author = {id: user.id, username: user.username}
        })
        return posts.reverse()
    }


    function deletePost (postId) {
        var post = data.findPost(function (post) {
            return post.id === postId
        })

        if (!post) throw new Error ('post not found')

        if (post.author !== sessionStorage.userId) throw new Error ("can't delete somebody else's post")

        data.deletePost(function (post) {
            return post.id === postId
        })
    }


    //CHAT-related functions

    function createChat(user){
        var chat = {
            users: [sessionStorage.userId, user.id],
            messages: [],
            date: new Date().toLocaleDateString('en-CA')
        }

        data.insertChat(chat)

        return chat
    }

    function addMessageToChat (message, chat){
        var chat = data.findChat(function (chat1){
            return chat1.id === chat.id
        })

        chat.messages.push(message)

        data.updateChat(chat)
    }

    function retrieveChatWith(user){
        var chat = data.findChat(function (chat){
            var foundUser1 = (chat.users.some(function (user1){
                return (user1 === user.id)
            }))
            var foundUser2 = (chat.users.some(function (user2){
                return (user2 === sessionStorage.userId)
            }))

            return (foundUser1 && foundUser2)
        })

        return chat
    }
    
    

    //MESSAGE-related functions

    function createMessage(message){
        var message = {
            text: message,
            author: sessionStorage.userId,
            time: new Date().toLocaleDateString('en-CA')
        }
        return message
    }

    return {
        registerUser: registerUser,
        loginUser: loginUser,
        retrieveUser: retrieveUser,
        retrieveUsers, retrieveUsers,
        logoutUser: logoutUser,
        getLoggedInUserId: getLoggedInUserId,
        checkLoggedInStatus: checkLoggedInStatus,
        createPost: createPost,
        retrievePosts: retrievePosts,
        deletePost: deletePost,
        createChat: createChat,
        addMessageToChat: addMessageToChat,
        retrieveChatWith: retrieveChatWith,
        createMessage: createMessage
    }
}) ()
