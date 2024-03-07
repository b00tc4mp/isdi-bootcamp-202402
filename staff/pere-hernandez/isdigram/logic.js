// business (logic)

var logic = (function () {

    //USER-related functions
    
    function registerUser(username, email, password, confirmedPassword){
        if (typeof username !== 'string')
            throw new TypeError (username + ' is not a string')
        if (typeof username.length < 1)
            throw new RangeError (username + ' must have more characters')

        //TODO email validation

        //

        var foundUser = data.findUser(function (user) {
            return (user.email === email || user.username === username)
        })

        if (foundUser) throw new Error ('user already exists')
        if (password !== confirmedPassword) throw new Error ("passwords don't match")

        var user = {
            email: email,
            username: username,
            password: password
        }

        data.insertUser(user)
    } 


    function loginUser (username, password){
        var user = data.findUser(function (user){
            return user.username === username && user.password === password
        })

        if (!user) throw new Error ('wrong credentials')

        sessionStorage.userId = user.id
    }


    function retrieveUser (){
        var user = data.findUser(function(user){
            return user.id === sessionStorage.userId
        })

        if (!user) throw new Error('user not found')

        return user
    }


    function logoutUser(){
        sessionStorage.clear()
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
            date: new Date().toLocaleDateString('en-CA'),
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
        return posts
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

    return {
        registerUser: registerUser,
        loginUser: loginUser,
        retrieveUser: retrieveUser,
        logoutUser: logoutUser,
        getLoggedInUserId: getLoggedInUserId,
        checkLoggedInStatus: checkLoggedInStatus,
        createPost: createPost,
        retrievePosts: retrievePosts,
        deletePost: deletePost
    }
}) ()
