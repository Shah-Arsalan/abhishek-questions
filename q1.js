var input = document.querySelector("#text");
var btn = document.querySelector("#button");
var outputText = document.querySelector(".output");


btn.addEventListener("click", printOutput);

function printOutput(){
    var textEntered = input.value;
    //onsole.log(textEntered);
    var chars = textEntered.split("");
    var reverse = chars.reverse();
    var newinput = reverse.join("");
    outputText.innerText = newinput;

    //return textEntered.split("").reverse().join("");
}