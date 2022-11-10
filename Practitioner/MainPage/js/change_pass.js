let state = false;

function toggle() {
    if (state) {
        document.getElementById("oldpsw").setAttribute("type", "password");
        document.getElementById("eye").setAttribute("class", "fa fa-eye-slash fa-lg");
        state = false;
    } else {
        document.getElementById("oldpsw").setAttribute("type", "text");
        document.getElementById("eye").setAttribute("class", "fa fa-eye fa-lg");
        state = true;
    }
}

function containsLetters(text) {
    return /[a-zA-Z]/.test(text)
}

function containsNums(text) {
    return /[0-9]/.test(text)
}

function containsChars(text) {
    return /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(text)
}

function strong(val) {
    let sum = 0;
    if (containsChars(val)) sum++
    if (containsLetters(val)) sum++
    if (containsNums(val, sum)) sum++

    if (sum === 1) {
        document.getElementById("first").setAttribute("class", "weak");
        document.getElementById("second").removeAttribute("class");
        document.getElementById("third").removeAttribute("class");
    } else if (sum === 2) {
        document.getElementById("second").setAttribute("class", "medium");
        document.getElementById("first").removeAttribute("class");
        document.getElementById("third").removeAttribute("class");
    } else if (sum === 3) {
        document.getElementById("third").setAttribute("class", "strong");
        document.getElementById("first").removeAttribute("class");
        document.getElementById("second").removeAttribute("class");
    }

}

function enable() {
    document.querySelector('button').disabled = false;
}

function matching() {
    let ops = document.getElementById("oldpsw").value;
    let nps = document.getElementById("newpass").value;
    let rpt = document.getElementById("confpass").value;
    if ((nps !== rpt || nps.length===0 || rpt.length===0) && ops.length!==0) {
        document.querySelector('button').disabled = true;
        document.getElementById("match").removeAttribute("class");
        document.getElementById("match").setAttribute("class", "error");
    }
}


//------------------------------------------------fetch()-get--
async function getInfo(){
    const response = await fetch(url);
    const data = await response.json();
    const {name, surname, org_name, email, dateOfBirth, phoneNumber, photo}=data
    document.getElementById("user_name").textContent = name + " " + surname;
    document.getElementById("org").textContent = org_name;
    document.getElementById("mail").textContent = email;
    document.getElementById("birthday").textContent = dateOfBirth;
    document.getElementById("phone").textContent = phoneNumber;
    document.getElementById("full_name").textContent = name + " " + surname;
    document.getElementsByClassName("photo").data = photo;
}
const url = ' ';

getInfo()
    .then(response =>{
        console.log(response)
    })
    .catch(error => {
    console.log(error);
});

//------------------------------------------------fetch()-post--

async function postInfo() {
    const oldpsw = document.querySelector("#oldpsw").innerText;
    const newpass = document.querySelector("#newpass").innerText;

    const response = await fetch("%URL%", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            oldpsw, newpass
        }),
    });
    console.log(response)
}

function ocPostInfo () {

    postInfo()
        .then(response => {
            alert("Your password was successfully changed")
            console.log(response)
        })
        .catch(error => {
            alert("Something went wrong. Please try again later:")
            console.log(error);
        });
}
