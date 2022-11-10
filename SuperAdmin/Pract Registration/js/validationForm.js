function validatation() {
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