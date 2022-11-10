
const patientPicture = document.querySelector("#patientPicture");
const patientname = document.querySelector("#name");
const patientsurname = document.querySelector("#surname");
const birthdate = document.querySelector("#start");

const store = (key, value, ) => localStorage.setItem(key, value);
patientPicture.addEventListener("change", (e) => store("patientPicture", e.target.value, false));
patientname.addEventListener("change", (e) => store("patientname", e.target.value, false));
patientsurname.addEventListener("change", (e) => store("patientsurname", e.target.value, false));
birthdate.addEventListener("change", (e) => store("patientbirthdate", e.target.value, false));


window.onload = function() {

  var patientname = localStorage.getItem('patientname');
  if (patientname !== null) $('#name').val(patientname);
  else { return}
  var patientsurname = localStorage.getItem('patientsurname');
  if (patientsurname !== null) $('#surname').val(patientsurname);
  else { return}
  var birthdate = localStorage.getItem('patientbirthdate');
  if (birthdate !== null) $('#start').val(birthdate);
  else { return}

}
reload();
Array.from(document.querySelectorAll('input[type="radio"]')).forEach(function(item, index) {
  item.addEventListener('click', save);
});
function save() {
  var gender = document.querySelector('input[name=gender]:checked').value;
  localStorage.setItem("gender", gender);
  var martial = document.querySelector('input[name=martial]:checked').value;
    localStorage.setItem("martial", martial);
  var multiplebirth = document.querySelector('input[name=multiplebirth]:checked').value;
    localStorage.setItem("multiplebirth", multiplebirth);
}

function reload() {
   var name = Array.from(document.getElementsByName('name'));
    var val3 = localStorage.getItem('name');
    for (var i = 0; i < name.length; i++) {
      if (name[i].value == val3) {
        name[i].value= true;
      }
    }
  var gender = Array.from(document.getElementsByName('gender'));
  var val1 = localStorage.getItem('gender');
  for (var i = 0; i < gender.length; i++) {
    if (gender[i].value == val1) {
      gender[i].checked = true;
    }
  }
  var martial = Array.from(document.getElementsByName('martial'));
    var val = localStorage.getItem('martial');
    for (var i = 0; i < martial.length; i++) {
      if (martial[i].value == val) {
        martial[i].checked = true;
      }}
    var multiplebirth = Array.from(document.getElementsByName('multiplebirth'));
      var val2 = localStorage.getItem('multiplebirth');
      for (var i = 0; i < multiplebirth.length; i++) {
        if (multiplebirth[i].value == val2) {
          multiplebirth[i].checked = true;
        }}
}
function validate() {
  let namefield = document.forms["myForm"]["name"].value;
  let surnamefield = document.forms["myForm"]["surname"].value;
 
  if (namefield == "" ) {
    var name = document.getElementById("name");
    name.style.borderColor = "red";
    name.addEventListener("focus", myFocusFunction, true);
    return false;
  }
  if(surnamefield == ""){
    var surname = document.getElementById("surname");
    surname.style.borderColor = "red";
    surname.addEventListener("focus", myFocusFunction, true);
    return false;
  }
  function myFocusFunction() {
    document.getElementById("name").style.border = "1px solid rgb(82, 112, 151)";
    document.getElementById("surname").style.border = "1px solid rgb(82, 112, 151)";

  }

}