var outputDiv = document.querySelector("#output");
var api = "https://randomuser.me/api/?results=10";

fetch(api)
.then(response => response.json())
.then (json => {
    json.results.map(array => {
        if(array.gender === "female"){
            outputDiv.innerHTML += `<p style="color:pink" >${array.name.first} </p>`
        }
        else if(array.gender === "male"){
            outputDiv.innerHTML += `<p style="color:blue" >${array.name.first} </p>`
        }
    })
} )