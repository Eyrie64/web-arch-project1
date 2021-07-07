document.getElementById("registerForm").addEventListener("submit", register);

function register(event) {
  event.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var cpassword = document.getElementById("confirmPassword").value;
  if (password !== cpassword) {
    alert("Passwords do not match!");
  } else {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        alert("Registration successful!");
      })
      .catch((error) => alert(error.message));
  }
}
