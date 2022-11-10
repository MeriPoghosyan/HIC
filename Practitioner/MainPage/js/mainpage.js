async function fetchcaller(url, method, comment){
    const response = await fetch(url);
}
const url = '';
async function getInfos(){
    const response = await fetch(url);
    // const {name, surname, pic, info ........} = data;
}

// for account data

getInfos();
$(function practionerData(data){
    const image = `<img src='${pic}'>`
    document.getElementById("info").innerHTML = image;
    var p = document.createElement("p");
    document.getElementById("info").appendChild(p);
    p.innerHTML = "Name Surname";

});
practionerData();
//////////////////////for patients data
$(function usersRender(data){
for( let i = 0; i<data.length; i++){
    var person = document.createElement("div");
    document.getElementById("forback").appendChild(person);
    person.classList.add("pers"); 
    const newLocal = `<img src='${pic}'>`;
    person.innerHTML = newLocal;
    var div = document.createElement("div");
    person.appendChild(div) ;
    div.classList.add("personal");
    div.innerHTML = `<p class='fullname'> '${fullname}'</p>`;
    var abbr = document.createElement("abbr");
    div.appendChild(abbr);
    abbr.innerHTML=`''${info}'`;
    var buttonsDiv = document.createElement("div");
    div.appendChild(buttonsDiv);
    buttonsDiv.classList.add("visits");
    var addVisit= document.createElement("div");
    buttonsDiv.appendChild(addVisit);
    addVisit.classList.add("addvisit");
    var visit= document.createElement("div");
    buttonsDiv.appendChild(visit);
    visit.classList.add("visit");
    visit.setAttribute("onclick", "document.location='Annayiej.html'")
    addVisit.setAttribute("onclick", "document.location='visitFirst.html'");
    addVisit.innerHTML=  "<button>+ Add visit</button>";
    visit.innerHTML = "<button>Visit</button>";
}});
usersRender();

//////////////for seaech button

const search = document.querySelector("#search");
const store = (key, value, ) => localStorage.setItem(key, value);
search.addEventListener("change", (e) => store("search", e.target.value, false));
var tosearch = localStorage.getItem('search');
const searching = await fetch("Urlll", {
    method: "POST",
    headers:{
        "Content-Type-only" :"json or application"
    },
    body: JSON.stringify({
        tosearch,
    }),
    
});
if(searching){
    localStorage.clear();
}
console.log(tosearch);