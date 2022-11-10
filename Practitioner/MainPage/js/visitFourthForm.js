const Observation = document.querySelector("#observation");
var ObStatus = document.getElementById("observationstatus");
ObStatus.onchange = function() {
    localStorage.setItem('ObStatus', this.value);
};
const ObDate = document.querySelector("#date");

const store = (key, value, ) => localStorage.setItem(key, value);
Observation.addEventListener("change", (e) => store("Observation", e.target.value, false));
ObDate.addEventListener("change", (e) => store("ObDate", e.target.value, false));

window.onload = function() {

    var Observation = localStorage.getItem('Observation');
    if (Observation !== null) $('#observation').val(Observation);
    else { return}
    var ObDate = localStorage.getItem('ObDate');
    if (ObDate !== null) $('#date').val(ObDate);
    else { return}
  
  }