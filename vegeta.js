let boutonCouleur = document.getElementById("ChangerCouleur");
let bloc = document.querySelector(".bloc");

boutonCouleur.addEventListener("click", function() {
    bloc.classList.toggle("dark-mode");
});