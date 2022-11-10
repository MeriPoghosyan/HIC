const Diagnose_Status = document.querySelector("#Diag");
const Diagnose_Clinical = document.querySelector("#Diag_cl");
var Diagnose = document.getElementById("select");
Diagnose.onchange = function() {
    localStorage.setItem('Diagnose', this.value);
};



const store = (key, value, ) => localStorage.setItem(key, value);
Diagnose_Status.addEventListener("change", (e)=>store("Diagnose_Status", e.target.value, false));
Diagnose_Clinical.addEventListener("change", (e) => store(" Diagnose_Clinical", e.target.value, false));

window.onload = function() {
    var Diagnose_Status = localStorage.getItem('Diagnose_Status');
    console.log(Diagnose_Status);
    if (Diagnose_Status!== null) $('#Diag').val(Diagnose_Status);
    else { return}
    var Diagnose_Clinical = localStorage.getItem('Diagnose_Clinical');
    if (Diagnose_Clinical !== null) $('#Diag_cl').val(Diagnose_Clinical);
    else { return}
}