//presentation

(function () {
    if (!logic.checkLoggedInStatus()) {
        location.href = '../login'

        return
    }

    var greeting = document.getElementById('greeting')
    var logoutButton = document.getElementById('logout')
    var createPostForm = document.getElementById('create-post')
    var postForm = document.getElementById('newPostForm')
    var postListSection = document.getElementById('post-list-section')
    var postFormSection = document.getElementById('post-form-section')
    var returnButton = document.getElementById('return')
    var body = document.querySelector('body')
    var chatButton = document.getElementById('chat-icon-button')
    var homeButton = document.getElementById('home-icon-button')
    var footer = document.querySelector('footer')
    var userList = document.getElementById('user-list')
    var chatSection = document.getElementById('chat-section')


    try {
        var user = logic.retrieveUser()

        greeting.innerText = 'Hello, ' + user.username + '!'

    } catch (error) {
        alert(error.message)
    }


    logoutButton.onclick =  function () {
        logic.logoutUser()

        location.href = '../login'
    }


    createPostForm.onclick =  function (){     
        postFormSection.style.display = 'flex'
        body.style.overflow = 'hidden'

        
        if (createPostForm.style.display === 'none')
            createPostForm.style.display = 'flex'
        else
            createPostForm.style.display = 'none' 
    }


    returnButton.onclick = function (){
        postFormSection.style.display = 'none'
        createPostForm.style.display = 'flex'
        postForm.reset()
        body.style.overflow = 'scroll'    
    }


    postForm.onsubmit =  function (event){
        event.preventDefault()
        body.style.overflow = 'scroll'      

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
            console.error(error)
            alert(error.message)
        }
    }


    function renderPosts(){
        try {
            var posts = logic.retrievePosts()

            postListSection.innerHTML = ''

            posts.forEach(function (post) {
                var article = document.createElement('article')

                var authorHeading = document.createElement('h3')
                authorHeading.innerText = post.author.username

                var imageDiv = document.createElement('div')
                imageDiv.classList.add('image-div')

                var image = document.createElement('img')
                image.src = post.photo

                imageDiv.appendChild(image)

                var paragraph = document.createElement('p')
                paragraph.innerText = post.comment

                var dateTime = document.createElement('time')
                dateTime.innerText = post.date


                article.append(authorHeading, imageDiv, paragraph, dateTime)

                if (post.author.id === logic.getLoggedInUserId()){
                    var deleteButton = document.createElement('button')
                    deleteButton.innerText = 'Delete'
                    deleteButton.classList.add('delete-post-button')

                    article.append(deleteButton)

                    deleteButton.onclick = function () {
                        if (confirm('Delete post?')){
                            try {
                                logic.deletePost(post.id)

                                renderPosts()
                            } catch (error) {
                                console.error(error)
                                alert(error.message)
                            }
                        }
                    }
                }              
                    
                postListSection.appendChild(article)
            })
        } catch (error) {
            alert(error.message)
        }
        
    }


    function renderUserList () {
        try {
            var users = logic.retrieveUsers()

            userList.innerHTML = ''

            users.forEach(function (user) {
                var userLi = document.createElement('li')

                if (user.status === 'online'){
                    userLi.classList.add('user-list-online')
                } else if (user.status === 'offline'){
                    userLi.classList.add('user-list-offline')
                }

                userLi.innerHTML = user.username

                userLi.addEventListener('click',  function () {

                    var chat = logic.createChat(user)
                    chatSection.innerHTML = ''
                    userList.style.display = 'none'
                    chatButton.style.display = ''

                    var chatTitle = document.createElement('div')
                    chatTitle.classList.add('chat-title')
                    chatTitle.innerHTML = user.username

                    var messageSection = document.createElement('section')
                    messageSection.classList.add('message-section')
                    messageSection.innerHTML = 'ijhvk,'

                    var chatForm = document.createElement('form')
                    chatForm.classList.add('chat-form')

                    var chatInputText = document.createElement('input')
                    chatInputText.type = 'text'
                    chatInputText.setAttribute('id', 'chat-text-input')

                    var sendMessageButton = document.createElement('button')
                    sendMessageButton.type = 'submit'
                    sendMessageButton.classList.add('send-message-button')

                    var messageIcon = document.createElement('img')
                    messageIcon.src = '../mail.png'
                    messageIcon.classList.add('message-icon')

                    sendMessageButton.appendChild(messageIcon)

                    chatForm.append(chatInputText, sendMessageButton)

                    chatSection.append(chatTitle, messageSection, chatForm)
                    chatSection.style.display = 'flex'

                    chatForm.onsubmit = function (){
                        var messageImput = document.getElementById('chat-text-input')
                        var messageText = messageImput.value
                        
                        try {
                            var message = logic.createMessage(messageText, user.username)

                            logic.addMessageToChat(message, chat)
                        } catch (error) {
                            
                        }
                    }
                })

                userList.appendChild(userLi)
            })
        } catch (error) {
            alert(error.message)
        }
    }


    chatButton.onclick = function (){
        footer.style.display = 'none'
        postListSection.style.display = 'none'
        chatButton.style.display = 'none'
        homeButton.style.display = 'block'
        userList.style.display = 'block'
        chatSection.style.display = 'none'
        chatButton.style.display = 'none'

        renderUserList()
    }


    homeButton.onclick = function (){
        footer.style.display = ''
        postListSection.style.display = 'flex'
        chatButton.style.display = 'flex'
        homeButton.style.display = ''
        userList.style.display = 'none'
        chatSection.style.display = 'none'
    }

    renderPosts()
})()

