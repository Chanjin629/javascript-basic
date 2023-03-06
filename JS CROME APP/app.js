// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value
    loginForm.classList.add("hidden")
    console.log(username)
}


loginForm.addEventListener("submit", onLoginSubmit);


