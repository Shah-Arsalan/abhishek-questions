var magicBtn = document.querySelector(".magic")

magicBtn.addEventListener("click", change);

function change(){
   console.log(document.body.style.backgroundColor)
    
    if(document.body.style.backgroundColor === "black"){
        document.body.style.backgroundColor = ""
    }
    else if( document.body.style.backgroundColor === ""){
        document.body.style.backgroundColor = "black" 
    }
    
}