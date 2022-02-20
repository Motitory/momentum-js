// const loginForm = document.getElementById("login-form")
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
// const link = document.querySelector("a");

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    // greeting.innerText = "Hello " + username;
    localStorage.setItem("USERNAME_KEY", username);
    paintGreetings(username)
}

// function handleLinkClick(event) {
//     event.preventDefault();
// }

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


// loginButton.addEventListener("click", onLoginBtnClick);
// loginForm.addEventListener("submit", onLoginSubmit);

// link.addEventListener("click", handleLinkClick);

const savedUsername = localStorage.getItem("USERNAME_KEY");

if (savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greetings
    paintGreetings(savedUsername);   
}