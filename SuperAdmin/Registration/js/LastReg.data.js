const Telecom = document.querySelector("#telecom");
const Type = document.querySelector("#typeO");
const Password = document.querySelector("#pass1");
const ConfirmPassword = document.querySelector("#confirm_pass");

const store = (key, value, ) => localStorage.setItem(key, value);
Telecom.addEventListener("change", (e) => store("Telecom", e.target.value, false));
Type.addEventListener("change", (e) => store("Type", e.target.value, false));
Password.addEventListener("change", (e) => store("Password", e.target.value, false));
ConfirmPassword.addEventListener("change", (e) => store("ConfirmPassword", e.target.value, false));

window.onload = function() {
    var Telecom = localStorage.getItem('Telecom');
    console.log(Telecom);
    if (Telecom!== null) $('#email').val(Telecom);
    else { return}
    var Type = localStorage.getItem('Type');
    if (Type !== null) $('#typeO').val(Type);
    else { return}
    var Password = localStorage.getItem('Password');
    if (Password !== null) $('#pass1').val(Password);
    else { return}
    var ConfirmPassword = localStorage.getItem('ConfirmPassword');
    if (ConfirmPassword !== null) $('#confirm_pass').val(ConfirmPassword);
    else { return}
}