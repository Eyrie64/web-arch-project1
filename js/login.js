document.getElementById("loginForm").addEventListener("submit", login);

function login(event) {
  event.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  auth
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      alert("Login successful!");
    })
    .catch((error) => alert(error.message));
}
