document.getElementById("registerForm").addEventListener("submit", register);

function register(event) {
  event.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert("Registration successful!");
    })
    .catch((error) => console.error(error.message));
}
