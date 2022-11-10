const myItemObjectArray = [];
for (let i=0;i<10;i++)
    myItemObjectArray.push( {itemId: i, itemName:"a"+i} );
let currentItemIndex = 5;

function getPrevious() {
    currentItemIndex--; // the global variable
    show(currentItemIndex, myItemObjectArray);
}
function show(index, arr) {
    alert( arr[index].itemId + " " + arr[index].itemName);
}
async function getInfo(){
    const response = await fetch(url);
    const data = await response.json();
    const {name, surname, Gender,dateOfBirth, phoneNumber,adress, Man, Woman}=data
    document.getElementById("Full_name").textContent = name + " " + surname;
    document.getElementById("gender").textContent = Gender;
    document.getElementById("Date").textContent = dateOfBirth;
    document.getElementById("Phone_number").textContent = phoneNumber;
    document.getElementById("Adress").textContent = adress;
    document.getElementsByClassName("man").src = Man;
    document.getElementsByClassName("woman").src = Woman;

}
const url = ' ';

getInfo()
    .then(response =>{
        console.log(response)
    })
    .catch(error => {
        console.log(error);
    });