const Organization_Name = document.querySelector("#Org_name");
const Country = document.querySelector("#country1");
const CIty = document.querySelector("#city1");
const State = document.querySelector("#state1");
const District = document.querySelector("#district1");
const Street = document.querySelector("#street1");
const Postal_code = document.querySelector("#postal1");

const store = (key, value, ) => localStorage.setItem(key, value);
Organization_Name.addEventListener("change", (e)=>store("Organization_Name ", e.target.value, false));
Country.addEventListener("change", (e) => store("Country ", e.target.value, false));
CIty.addEventListener("change", (e) => store("CIty", e.target.value, false));
State.addEventListener("change", (e) => store("State", e.target.value, false));
District.addEventListener("change", (e) => store("District", e.target.value, false));
Street.addEventListener("change", (e) => store("Street", e.target.value, false));
Postal_code.addEventListener("change", (e) => store("Postal_code", e.target.value, false));

window.onload = function() {
    var Organization_Name = localStorage.getItem('Organization_Name');
    console.log(Organization_Name);
    if (Organization_Name!== null) $('#Org_name').val(Organization_Name);
    else { return}
    var Country = localStorage.getItem('Country');
    console.log(Country);
    if (Country!== null) $('#country1').val(Country);
    else { return}
    var CIty = localStorage.getItem('CIty');
    if (CIty !== null) $('#city1').val(CIty);
    else { return}
    var State = localStorage.getItem('State');
    if (State !== null) $('#state1').val(State);
    else { return}
    var District = localStorage.getItem('District');
    if (District !== null) $('#district1').val(District);
    else { return}
    var Street = localStorage.getItem('Street');
    if (Street !== null) $('#street1').val(Street);
    else { return}
    var Postal_code = localStorage.getItem('Postal_code');
    if (Postal_code !== null) $('#postal1').val(Postal_code);
    else { return}
}