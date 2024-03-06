//presentation

(function () {
    var greeting = document.getElementById('greeting')
    var logoutButton = document.getElementById('logout')
    var createPostForm = document.getElementById('createPost')
    var postForm = document.getElementById('newPostForm')
    var postListSection = document.getElementById('post-list-section')
    var postFormSection = document.getElementById('post-form-section')
    var returnButton = document.getElementById('return')


    try {
        var user = logic.retrieveUser()

        greeting.innerText = 'Hello, ' + user.username + '!'
    } catch (error) {
        alert(error.message)
    }


    logoutButton.onclick =  function () {
        logic.logoutUser()

        var loginAdress = location.href.replace('home', 'login')

        location.href = loginAdress
    }


    createPostForm.onclick =  function (){     
        postFormSection.style.display = 'block'      
        
        if (createPostForm.style.display === 'none')
            createPostForm.style.display = 'block'
        else
            createPostForm.style.display = 'none' 
    }


    postForm.onsubmit =  function (event){
        event.preventDefault()        

        var photoImput = document.getElementById('image')
        var photo = photoImput.value

        var commentImput = document.getElementById('comment')
        var comment = commentImput.value

        try {
            logic.createPost(photo, comment)
            postFormSection.style.display = 'none'
            createPostForm.style.display = 'block'
            postForm.reset()

            renderPosts()
            
        } catch (error) {
            error.message
        }
    }

    returnButton.onclick = function (){
        postFormSection.style.display = 'none'
        createPostForm.style.display = 'block'
        postForm.reset()
    }


    function renderPosts(){
        try {
            var posts = logic.retrievePosts()

            postListSection.innerHTML = ''

            posts.forEach(function (post) {
                var article = document.createElement('article')

                var authorHeading = document.createElement('h3')
                authorHeading.innerText = post.author

                var image = document.createElement('img')
                image.src = post.photo

                var paragraph = document.createElement('p')
                paragraph.innerText = post.comment

                var dateTime = document.createElement('time')
                dateTime.innerText = post.date

                var deleteButton = document.createElement('button')
                deleteButton.innerText = 'Delete'
                deleteButton.classList.add('delete-post-button')
                

                article.append(authorHeading, image, paragraph, dateTime, deleteButton)
                
                postListSection.appendChild(article)

                deleteButton.addEventListener('click', function(){
                    logic.deletePost(post)

                    renderPosts()
                })
            })
        } catch (error) {
            alert(error.message)
        }
        
    }

        renderPosts()
})()

