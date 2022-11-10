// type = "text/javascript"
// language = "javascript"
// var fields = document.getElementsByClassName("validate");
// var submit_button = document.getElementById("submit");
// const rules = {
//
//     country: /^[a-z\d]{5,12}$/,
//     city: /^[a-z\d]{5,12}$/,
//     state: /^[a-z\d]{5,12}$/,
//     district: /^[a-z\d]{5,12}$/,
//     street: /^[a-z\d]{5,12}$/,
// };
// var field_status = Array(fields.length);
//
// function validate(field, field_id) {
//     field_status[field_id] = field.value.match(rules[field.name]);
//     field.className = field.className.replace(/ (in|)valid/, "");
//     if (!field_status[field_id]) {
//         field.className += " invalid";
//     } else {
//         field.className += " valid";
//     }
//     toggleSubmitButton();
// }
//
// function toggleSubmitButton() {
//     var status = 0;
//     for (var x = 0; x < field_status.length; x++) {
//         if (!field_status[x]) {
//             status = 0;
//             break;
//         } else {
//             status = field_status[x];
//         }
//     }
//     var display = "none";
//     if (status) {
//         display = "block";
//     }
//     submit_button.style.display = display;
// }
//
// function addKeyUpEvent(field, field_id) {
//     field.addEventListener("keyup", function (event) {
//         validate(this, field_id);
//     });
// }
//
// for (var x = 0; x < fields.length; x++) {
//     addKeyUpEvent(fields[x], x);
// }
// toggleSubmitButton();
// onload =function(){
//     var ele = document.querySelectorAll('.validate')[0];
//     ele.onkeypress = function(e) {
//         if(isNaN(this.value+""+String.fromCharCode(e.charCode)))
//             return false;
//     }
//     ele.onpaste = function(e){
//         e.preventDefault();
//     }
// }



