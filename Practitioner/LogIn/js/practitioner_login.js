let state = false;
function toggle(){
    if(state){
        document.getElementById("psw").setAttribute("type","password");
        document.getElementById("eye").setAttribute("class", "fa fa-eye fa-lg")
        state = false;
    }
    else{
        document.getElementById("psw").setAttribute("type","text");
        document.getElementById("eye").setAttribute("class", "fa fa-eye-slash fa-lg")
        state= true;
    }
}

//---------------------------------------------------------------------------------------------------
async function postInfo() {
    const username = document.querySelector("#uname").innerText;
    const password = document.querySelector("#psw").innerText;

    const response = await fetch("%URL%", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username, password
        }),
    });
    console.log(response)

}

function ocPostInfo() {

    postInfo()
        .then(response => {
            location.href = '../../MainPage/html/mainPage.html'
            console.log(response)
        })
        .catch(error => {
            alert("Username or Password is incorrect")
            console.log(error);
        });
}
