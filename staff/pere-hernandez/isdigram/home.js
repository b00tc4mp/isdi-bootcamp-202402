//presentation

(function () {
    var greeting = document.getElementById('greeting')
    var logoutButton = document.getElementById('logout')
    var newPostButton = document.getElementById('createPost')
    var postForm = document.getElementById('newPostForm')

    try {
        var user = logic.retrieveUser()

        greeting.innerText = 'Hello, ' + user.username + '!'
    } catch (error) {
        alert(error.message)
    }


    logoutButton.addEventListener('click', function (){
        logic.logoutUser()

        var loginAdress = location.href.replace('home', 'login')

        location.href = loginAdress
    })


    newPostButton.addEventListener('click', function (){     
        postForm.style.display = 'block'      
        
        if (newPostButton.style.display === 'none')
            newPostButton.style.display = 'block'
        else
            newPostButton.style.display = 'none' 
    })


    postForm.addEventListener('submit', function (event){
        event.preventDefault()        

        var photoImput = document.getElementById('image')
        var photo = photoImput.value

        var commentImput = document.getElementById('comment')
        var comment = commentImput.value

        try {
            logic.createPost(photo, comment)
            postForm.style.display = 'none'
            newPostButton.style.display = 'block'
            postForm.reset()
            
        } catch (error) {
            error.message
        }

    })
})()

