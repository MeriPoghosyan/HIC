const Main_complains = document.querySelector("#Main_comp");
const Anamnesis_morbi = document.querySelector("#anamnesis");
const Growth_and_development = document.querySelector("#growth");
const Epidemiological_anamnesis = document.querySelector("#epidemio");


const store = (key, value, ) => localStorage.setItem(key, value);
Main_complains.addEventListener("change", (e)=>store("Main_complains", e.target.value, false));
Anamnesis_morbi.addEventListener("change", (e) => store("Anamnesis_morbi", e.target.value, false));
Growth_and_development.addEventListener("change", (e) => store("Growth_and_development", e.target.value, false));
Epidemiological_anamnesis.addEventListener("change", (e) => store("Epidemiological_anamnesis", e.target.value, false));


window.onload = function() {
    var Main_complains = localStorage.getItem('Main_complains');
    console.log(Main_complains);
    if (Main_complains!== null) $('#Main_comp').val(Main_complains);
    else { return}
    var Anamnesis_morbi = localStorage.getItem('Anamnesis_morbi');
    console.log(Anamnesis_morbi);
    if (Anamnesis_morbi!== null) $('#anamnesis').val(Anamnesis_morbi);
    else { return}
    var Growth_and_development = localStorage.getItem('Growth_and_development');
    if (Growth_and_development !== null) $('#growth').val(Growth_and_development);
    else { return}
    var Epidemiological_anamnesis= localStorage.getItem('Epidemiological_anamnesis');
    if (Epidemiological_anamnesis !== null) $('#epidemio').val(Epidemiological_anamnesis);
    else { return}
}