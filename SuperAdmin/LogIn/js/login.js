async function postInfo() {
    const username = document.querySelector("#username").innerText;
    const password = document.querySelector("#password").innerText;

    const response = await fetch("%URL%", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username,
            password
        }),
    });
    console.log(response)

}

function ocPostInfo() {

    postInfo()
        .then(response => {
            location.href = '../../Registration/html/firstRegister.html'
            console.log(response)
        })
        .catch(error => {
            alert("Username or Password is incorrect")
            console.log(error);
        });
}