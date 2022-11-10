function enabel(){
    document.querySelector('button').disabled=false;
}

function coPassword(){
let nsp = document.getElementById("pass1").value;
let rpt = document.getElementById("confirm_pass").value;
if(nsp !==rpt){
    document.querySelector('button').disabled=true;
    document.getElementById("normal").removeAttribute("class");
    document.getElementById("normal").setAttribute("class","error");
}
if((nsp ===rpt)&&(nsp.length !==0 || rpt.length!==0)){
        document.getElementById("normal2").removeAttribute("class");
        document.getElementById("normal2").setAttribute("class","noterror");
    }
}