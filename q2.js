var api = "https://randomuser.me/api/?results=10"
var outputText = document.querySelector(".output");


fetch(api)
.then( response => response.json())
.then(data => {
    
    for(i=0;i<data.results.length;i++){
        //outputText.innerHTML +=  <p style="color:grey" > `${data.results[i].dob.age}` </p>   ;
        if(data.results[i].dob.age > 45){
            outputText.innerHTML += `<p style="color:green" >${data.results[i].name.first} </p>`;
        }
    }
})

