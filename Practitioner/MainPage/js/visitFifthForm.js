const Medication = document.querySelector("#medication");
var MedStatus = document.getElementById("medicationstatus");
MedStatus.onchange = function() {
    localStorage.setItem('MedStatus', this.value);
};
const MedDate = document.querySelector("#date");

const store = (key, value, ) => localStorage.setItem(key, value);
Medication.addEventListener("change", (e) => store("Medication", e.target.value, false));
MedDate.addEventListener("change", (e) => store("MedDate", e.target.value, false));

window.onload = function() {

    var Medication = localStorage.getItem('Medication');
    if (Medication !== null) $('#medication').val(Medication);
    else { return}
    var MedDate = localStorage.getItem('MedDate');
    if (MedDate !== null) $('#date').val(MedDate);
    else { return}
  
  }