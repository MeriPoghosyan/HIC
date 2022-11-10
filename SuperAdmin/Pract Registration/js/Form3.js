const Email = document.querySelector("#email");
const Username = document.querySelector("#username");
const Password = document.querySelector("#password");
const ComfirmPassword = document.querySelector("#confirm_password");


const store = (key, value, ) => localStorage.setItem(key, value);
Email.addEventListener("change", (e) => store("Email", e.target.value, false));
Username.addEventListener("change", (e) => store("Username", e.target.value, false));
Password.addEventListener("change", (e) => store("Password", e.target.value, false));
ComfirmPassword.addEventListener("change", (e) => store("ComfirmPassword", e.target.value, false));

window.onload = function() {
    var Email = localStorage.getItem('Email');
    // console.log(Email);
    if (Email !== null) $('#email').val(Email);
    else { return}
    var Username = localStorage.getItem('Username');
    if (Username !== null) $('#username').val(Username);
    else { return}
    var Password = localStorage.getItem('Password');
    if (Password !== null) $('#password').val(Password);
    else { return}
    var ComfirmPassword = localStorage.getItem('ComfirmPassword');
    if (ComfirmPassword !== null) $('#confirm_password').val(ComfirmPassword);
    else { return}
}
   