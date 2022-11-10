const getStoreData = (key) => localStorage.getItem(key);
const handleSubmit = async (e) =>{
    e.preventDefault();
    const procedure = getStoreData("Procedure");
    const proStatus = getStoreData("ProStatus");
    const proDate = getStoreData("ProDate");
    const observation = getStoreData("Observation");
    const obStatus = getStoreData("ObStatus");
    const obDate = getStoreData("ObDate");
    const medication = getStoreData("Medication");
    const medStatus = getStoreData("MedStatus");
    const medDate = getStoreData("MedDate");
    
    const response = await fetch("%URL%",{
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            procedure,
            proStatus,
            proDate,
            observation,
            obStatus,
            obDate,
            medication,
            medStatus,
            medDate,
        }),
    });
    console.log("Response: ", response);
};
const finalForm = document.querySelector("#final-form");
finalForm.addEventListener("submit", handleSubmit);