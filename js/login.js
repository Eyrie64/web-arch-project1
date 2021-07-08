document.getElementById("loginForm").addEventListener("submit", login);

function login(event) {
  event.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  auth
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      alert("Login successful!");
      window.location.replace(`${baseURL}/home.html`);
    })
    .catch((error) => alert(error.message));
}
