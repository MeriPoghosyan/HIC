const city = document.querySelector("#city");
const state = document.querySelector("#state");
const district = document.querySelector("#district");
const street = document.querySelector("#street");
const postalcode = document.querySelector("#postalcode");
var language = document.getElementById("languages");
language.onchange = function() {
    localStorage.setItem('language', this.value);
};
var typeofadress = document.getElementById("typeofaddress");
typeofadress.onchange = function() {
    localStorage.setItem('typeofaddress', this.value);
};
var country = document.getElementById("country");
country.onchange =function(){
    localStorage.setItem('country' , this.value);
}
const store = (key, value, ) => localStorage.setItem(key, value);
city.addEventListener("change", (e) => store("city", e.target.value, false));
state.addEventListener("change", (e) => store("state", e.target.value, false));
district.addEventListener("change", (e) => store("district", e.target.value, false));
street.addEventListener("change", (e) => store("street", e.target.value, false));
postalcode.addEventListener("change", (e) => store("postalcode", e.target.value, false));


window.onload = function() {
    var typeofaddress = localStorage.getItem('typeofaddress');
    if(typeofaddress !== null) $('#typeofaddress').val(typeofaddress);    
    else{return}
    var language = localStorage.getItem('language');
    if(language !== null)$('#languages').val(language);
    else{return}
    var country = localStorage.getItem('country');
    if(country !== null) $('#country').val(country);
    elseP
    var city = localStorage.getItem('city');
    if (city !== null) $('#city').val(city);
    else {return}
    var state = localStorage.getItem('state');
    if (state !== null) $('#state').val(state);
    else{return}
    var district = localStorage.getItem('district');
    if (district !== null) $('#district').val(district);
    else{return}
    var street = localStorage.getItem('street');
    if (street !== null) $('#street').val(street);
    else{return}
    var postalcode = localStorage.getItem('postalcode');
    if (postalcode !== null) $('#postalcode').val(postalcode);
    var language = localStorage.getItem('language');
    if (language !== null) $('#languages').val(language);
  }
  



  function validate() {
    if(document.getElementById("languages").value== -1 ) {
        var typ = document.getElementById("languages");
        typ.style.borderColor = "red";
        typ.addEventListener("focus", myFocusFunction, true);
        return false;
      }
    if(document.getElementById("typeofaddress").value== -1 ) {
      var typ = document.getElementById("typeofaddress");
      typ.style.borderColor = "red";
      typ.addEventListener("focus", myFocusFunction, true);
      return false;
    }
    if(document.getElementById("country").value== -1 ) {
        return false;
      }
      if(document.getElementById("city").value == ""){
        var typ = document.getElementById("city");
        typ.style.borderColor = "red";
        typ.addEventListener("focus", myFocusFunction, true);
          return false;
      }
         if(document.getElementById("state").value == ""){
        var typ = document.getElementById("state");
        typ.style.borderColor = "red";
        typ.addEventListener("focus", myFocusFunction, true);
          return false;
      }
          if(document.getElementById("district").value == ""){
        var typ = document.getElementById("district");
        typ.style.borderColor = "red";
        typ.addEventListener("focus", myFocusFunction, true);
          return false;
      }
      if(document.getElementById("street").value == ""){
        var typ = document.getElementById("street");
        typ.style.borderColor = "red";
        typ.addEventListener("focus", myFocusFunction, true);
          return false;
      }
      if(document.getElementById("postalcode").value == "" || isNaN(document.getElementById("postalcode").value) ||
      document.getElementById("postalcode").length < 3 ) {
        var typ = document.getElementById("postalcode");
        typ.style.borderColor = "red";
        typ.addEventListener("focus", myFocusFunction, true);
          return false;
      }

    function myFocusFunction() {
      document.getElementById("typeofaddress").style.border = "1px solid rgb(82, 112, 151)";
      document.getElementById("languages").style.border = "1px solid rgb(82, 112, 151)";
      document.getElementById("city").style.border = "1px solid rgb(82, 112, 151)";
      document.getElementById("state").style.border = "1px solid rgb(82, 112, 151)";
      document.getElementById("district").style.border = "1px solid rgb(82, 112, 151)";
      document.getElementById("postalcode").style.border = "1px solid rgb(82, 112, 151)";

  
    }
  
  }