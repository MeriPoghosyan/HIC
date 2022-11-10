const City = document.querySelector("#city");
const State = document.querySelector("#state");
const District = document.querySelector("#district");
const Street = document.querySelector("#street");
const Postalcode = document.querySelector("#postalcode");
var Country = document.getElementById("country");
Country.onchange = function(){
    localStorage.setItem('Country' , this.value);
};
var StartYear = document.getElementById("ddlYears1");
StartYear.onchange = function(){
    localStorage.setItem('StartYear' , this.value);
};
var EndYear = document.getElementById("ddlYears2");
EndYear.onchange = function(){
    localStorage.setItem('EndYear' , this.value);
};
const store = (key, value ) => localStorage.setItem(key, value);
City.addEventListener("change", (e) => store("City", e.target.value, false));
State.addEventListener("change", (e) => store("State", e.target.value, false));
District.addEventListener("change", (e) => store("District", e.target.value, false));
Street.addEventListener("change", (e) => store("Street", e.target.value, false));
Postalcode.addEventListener("change", (e) => store("Postalcode", e.target.value, false));


window.onload = function() {

    var City = localStorage.getItem('City');
    // console.log(City);
    if (City !== null) $('#city').val(City);
    else {return}
    var State = localStorage.getItem('State');
    if (State !== null) $('#state').val(State);
    else{return}
    var District = localStorage.getItem('District');
    if (District !== null) $('#district').val(District);
    else{return}
    var Street = localStorage.getItem('Street');
    if (Street !== null) $('#street').val(Street);
    else{return}
    var Postalcode = localStorage.getItem('Postalcode');
    if (Postalcode !== null) $('#postalcode').val(Postalcode);


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
 





