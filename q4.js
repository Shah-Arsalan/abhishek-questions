var api = "https://randomsuser.me/api/";


function errorhandler(error){
    console.log(error.name);
    console.log(error.message);
}

fetch(api)
.then(response =>  response.json())
.then(json => console.log(json))
.catch(errorhandler)



// var url="https://randomsuser.me/api/";
// var outputText=document.querySelector(".output-text");


// fetch(url)
// .then(response=>console.log(response))
// .catch(error=>{
//    outputText.innerHTML=error.name;
//    console.log(error.message)})