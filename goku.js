//Bouton Couleur

let boutonCouleur = document.getElementById("ChangerCouleur");
let bloc = document.querySelector(".bloc");

boutonCouleur.addEventListener("click", function() {
    bloc.classList.toggle("dark-mode");
});

//Tabs

//Première question
let tabs = document.getElementById("question");
let toggleQbutton = document.getElementById("toggleQ");

tabs.style.visibility="hidden";
tabs.style.transition="1.0s";


function toggleQ(){
    if (tabs.style.visibility ==="hidden"){
        tabs.style.visibility ="visible"  
        toggleQbutton.innerHTML = "Première question"
        
    }else {
    tabs.style.visibility = "hidden"
    toggleQbutton.innerHTML ="Première question"
}
}

toggleQbutton.addEventListener("click",toggleQ)

//Deuxième question

let tabs2 = document.getElementById("question2");
let toggleQ2button = document.getElementById("toggleQ2");

tabs2.style.visibility="hidden";
tabs2.style.transition="1.0s";


function toggleQ2(){
    if (tabs2.style.visibility ==="hidden"){
        tabs2.style.visibility ="visible"  
        toggleQ2button.innerHTML = "Deuxième question"
        
    }else {
    tabs2.style.visibility = "hidden"
    toggleQ2button.innerHTML ="Deuxième question"
}
}

toggleQ2button.addEventListener("click",toggleQ2)


//Troisième question

let tabs3 = document.getElementById("question3");
let toggleQ3button = document.getElementById("toggleQ3");

tabs3.style.visibility="hidden";
tabs3.style.transition="1.0s";


function toggleQ3(){
    if (tabs3.style.visibility ==="hidden"){
        tabs3.style.visibility ="visible"  
        toggleQ3button.innerHTML = "Troisième question"
        
    }else {
    tabs3.style.visibility = "hidden"
    toggleQ3button.innerHTML ="Troisième question"
}
}
toggleQ3button.addEventListener("click",toggleQ3)