const Procedure = document.querySelector("#procedure");
var ProStatus = document.getElementById("procedurestatus");
ProStatus.onchange = function() {
    localStorage.setItem('ProStatus', this.value);
};
const ProDate = document.querySelector("#date");

const store = (key, value, ) => localStorage.setItem(key, value);
Procedure.addEventListener("change", (e) => store("Procedure", e.target.value, false));
ProDate.addEventListener("change", (e) => store("ProDate", e.target.value, false));

window.onload = function() {

    var Procedure = localStorage.getItem('Procedure');
    if (Procedure !== null) $('#procedure').val(Procedure);
    else { return}
    var ProDate = localStorage.getItem('ProDate');
    if (ProDate !== null) $('#date').val(ProDate);
    else { return}
   
  }