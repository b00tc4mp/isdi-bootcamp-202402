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

// data layer
var db = {
    users: new Collection('users'),
    posts: new Collection('posts'),
    chats: new Collection('chats')
}