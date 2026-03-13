function login(){

let username = document.getElementById("username").value
let password = document.getElementById("password").value

if(username === "admin" && password === "1234"){

localStorage.setItem("willcoinLoggedIn","true")
localStorage.setItem("willcoinUser", username)

window.location.href = "dashboard.html"

}else{

alert("Invalid login details")

}

}

function logout(){

localStorage.removeItem("willcoinLoggedIn")
localStorage.removeItem("willcoinUser")

window.location.href = "login.html"

}
