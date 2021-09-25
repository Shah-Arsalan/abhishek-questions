var output = document.querySelector(".out");
var btn = document.querySelector(".button")

// Math.floor(Math.random() * 10)

var array = ["arsalan", "sara","samyak","neha","haroon","azhar","abhishek","shahrukh","junaid","tanay"];
// console.log(array[1])

btn.addEventListener("click", random)

function random(){
    output.innerText = array[ Math.floor(Math.random() * 9)]
    
}