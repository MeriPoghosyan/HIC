const Name = document.querySelector("#Name");
const Surname = document.querySelector("#surName");
const Phone_number= document.querySelector("#phone");
const Email = document.querySelector("#E-Mail");
const Title = document.querySelector("#title");


const store = (key, value, ) => localStorage.setItem(key, value);
Name.addEventListener("change", (e)=>store("Name ", e.target.value, false));
Surname.addEventListener("change", (e) => store("Surname ", e.target.value, false));
Phone_number.addEventListener("change", (e) => store("Phone_number", e.target.value, false));
Email.addEventListener("change", (e) => store("Email", e.target.value, false));
Title.addEventListener("change", (e) => store("Title", e.target.value, false));

window.onload = function() {
    var Name = localStorage.getItem('Name');
    console.log(Organization_Name);
    if (Name!== null) $('#Name').val(Name);
    else { return}
    var Surname = localStorage.getItem('Surname');
    console.log(Surname);
    if (Surname!== null) $('#surName').val(Surname);
    else { return}
    var Phone_number = localStorage.getItem('Phone_number');
    if (Phone_number!== null) $('#phone').val(Phone_number);
    else { return}
    var Email = localStorage.getItem('Email');
    if (Email !== null) $('#E-Mail').val(Email);
    else { return}
    var Title = localStorage.getItem('Title');
    if (Title !== null) $('#title').val(Title);
    else { return}
}