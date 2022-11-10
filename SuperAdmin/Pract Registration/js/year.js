(window.onload = function () {
    //Reference the DropDownList.
    var ddlYears1 = document.getElementById("ddlYears1");
    var ddlYears2 = document.getElementById("ddlYears2");
    //Determine the Current Year.
    var currentYear = (new Date()).getFullYear();
    // var option=<option>Year</option>
    //Loop and add the Year values to DropDownList.
    for (var i = 1950; i <= currentYear; i++) {
        var option1 = document.createElement("OPTION");
        var option2 = document.createElement("OPTION");
        option1.innerHTML = i;
        option2.innerHTML = i;
        option1.value = i;
        option2.value = i;
        ddlYears1.appendChild(option1);
        ddlYears2.appendChild(option2);
        
    }
})();
