function signOut(e) {
  e.preventDefault();

  auth.signOut();
  window.location.replace(`${baseURL}/index.html`);
}

const logoutbutton = document.getElementById("signout");
logoutbutton.addEventListener("click", signOut);
