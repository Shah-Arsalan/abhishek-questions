var input = document.querySelector(".num")
var btn = document.querySelector(".button");
var outputText = document.querySelector(".output")

var randomNUm =  Math.floor(Math.random() * 10)
console.log(randomNUm)


btn.addEventListener("click", check)

function check(){
    console.log(input.value)
    if(input.value == randomNUm){
        outputText.innerText = "You won"
    }else{
        outputText.innerText = "try again"
    }
}