const getStoreData = (key) => localStorage.getItem(key);
const handleSubmit = async (e) =>{
    e.preventDefault();
    const picture = getStoreData("Picture");
    const name = getStoreData("Name");
    const surname = getStoreData("Surname");
    const birthdate = getStoreData("Birthdate");
    const phone = getStoreData("Phone");
    const language = document.getElementById('language')
    const langvalue = language.options[language.selectedIndex].value;
    const gender = document.querySelector('input[name="gender"]:checked').id;

    //
    const country = document.getElementById('Country')
    const countryvalue = country.options[country.selectedIndex].value;
    const city = getStoreData("City");
    const state = getStoreData("State");
    const district = getStoreData("District");
    const street = getStoreData("Street");
    const postalcode = getStoreData("Postalcode");
    const startYear = document.getElementById('StartYear')
    const startYearValue = startYear.options[startYear.selectedIndex].value;
    const endYear = document.getElementById('EndYear')
    const endYearValue = endYear.options[endYear.selectedIndex].value;
    //
    const email = getStoreData("Email");
    const username = getStoreData("Username");
    const password = getStoreData("Password");
    const comfirmpassword = getStoreData("ComfirmPassword");
    

    
    const response = await fetch("%URL%",{
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            picture,
            name,
            surname,
            birthdate,
            phone,
            langvalue,
            gender,
            countryvalue,
            city,
            state, 
            district,
            street,
            postalcode,
            startYearValue,
            endYearValue,
            email,
            username,
            password,
            comfirmpassword,
        }),
    });
    console.log("Response: ", response);
};
const finalForm = document.querySelector("#final-form");
finalForm.addEventListener("submit", handleSubmit);