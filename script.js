const temaBtn = document.querySelector("#tema");
const iconTema = document.querySelector("bi")
const img = document.querySelector("#capa")

// Toggle light mode
function togglelightMode() {
    document.body.classList.toggle("light");    
}

// Load light or dark mode
function loadTheme() {
    const lightMode = localStorage.getItem("light");
    if (lightMode){
        togglelightMode();
    }
}

temaBtn.addEventListener("change", function(){
    togglelightMode();

    // Save or remove Light mode
    localStorage.removeItem("light");

    if(document.body.classList.contains("light")) {
        localStorage.setItem("light", 1);    
    }
})

function onePiece(){
   img.src = "op.jpg";
   img.style.cssText = "box-shadow: rgb(32, 74, 130) 0px 20px 30px -10px;"
    setTimeout("bokuHero()",2500);
}
function bokuHero(){
    img.src = "bh.jpg";
    img.style.cssText = "box-shadow: rgb(19, 96, 76) 0px 20px 30px -10px;"
    setTimeout("blackClover()",2500);
}
function blackClover(){
    img.src = "bc.jpg";
    img.style.cssText = "box-shadow: rgb(140, 120, 85) 0px 20px 30px -10px;"
    setTimeout("naruto()",2500);
}
function naruto(){
    img.src = "nt.jpg";
    img.style.cssText = "box-shadow: rgb(142, 142, 142) 0px 20px 30px -10px;"
    setTimeout("naverLand()",2500);
}
function naverLand(){
    img.src = "nl.jpg";
    img.style.cssText = "box-shadow: rgb(145, 140, 126) 0px 20px 30px -10px;"
    setTimeout("onePiece()",2500);
}

loadTheme();