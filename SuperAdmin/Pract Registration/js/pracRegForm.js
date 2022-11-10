function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    const value = Object.fromEntries(data.entries());
    
    value.topics = data.getAll("name");
    
        console.log({ value });
    }
    
    const form = document.getElementById("myForm");
    form.addEventListener('submit', handleSubmit);


    const URL = 'https://jsonplaceholder.typicode.com/todos/1'
    // Send a GET request without any data to the server
    fetch(URL, {method: "GET"})
    // Get the JSON data from the raw response
    .then(res => res.json())
    // Print the result
    .then(console.log)