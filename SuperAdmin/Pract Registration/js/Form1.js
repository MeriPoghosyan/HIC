const Picture = document.querySelector("#pic");
const Name = document.querySelector("#name");
const Surname = document.querySelector("#surname");
const Birthdate = document.querySelector("#date");
const Phone = document.querySelector("#phone");
var language = document.getElementById("language");
language.onchange = function() {
    localStorage.setItem('language', this.value);
};
const store = (key, value, ) => localStorage.setItem(key, value);
Picture.addEventListener("change", (e) => store("Picture", e.target.value, false));
Name.addEventListener("change", (e) => store("Name", e.target.value, false));
Surname.addEventListener("change", (e) => store("Surname", e.target.value, false));
Birthdate.addEventListener("change", (e) => store("Birthdate", e.target.value, false));
Phone.addEventListener("change", (e) => store("Phone", e.target.value), false);


window.onload = function() {

  var Name = localStorage.getItem('Name');
  if (Name !== null) $('#name').val(Name);
  else { return}
  var Surname = localStorage.getItem('Surname');
  if (Surname !== null) $('#surname').val(Surname);
  else { return}
  var Birthdate = localStorage.getItem('Birthdate');
  if (Birthdate !== null) $('#date').val(Birthdate);
  else { return}
  var Phone = localStorage.getItem('Phone');
  if (Phone !== null) $('#phone').val(Phone);
  else { return}

}

reload();
Array.from(document.querySelectorAll('input[type="radio"]')).forEach(function(item, index) {
  item.addEventListener('click', save);
});
function save() {
  var gender = document.querySelector('input[name=gender]:checked').value;
  localStorage.setItem("gender", gender);
}

function reload() {
   var name = Array.from(document.getElementsByName('name'));
    var val3 = localStorage.getItem('name');
    for (var i = 0; i < name.length; i++) {
      if (name[i].value == val3) {
        name[i].value= true;
      }
    }
}
