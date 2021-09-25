var inputone = document.querySelector(".one");
var inputtwo = document.querySelector(".two");
var btnone =  document.querySelector(".o");
var btntwo =  document.querySelector(".t");
var outputText = document.querySelector(".output")

btnone.addEventListener("click", print)

function print(){
    outputText.innerHTML = `<h1>${inputone.value}</h1>`
}

btntwo.addEventListener("click", color)

function color(){
    console.log(inputtwo.value)
    outputText.style.color = inputtwo.value;
}