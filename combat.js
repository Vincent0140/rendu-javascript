//Création du premier personnage

let personnage1={
    nom : "Astérix",
    vie : 100,
    attaque : 30,
    precision : 0.4
};

// Création du second personnage 

let personnage2={
    nom : "César",
    vie : 100,
    attaque : 15,
    precision : 0.7
};

// On vérifie la précision de l'attaque des personnages

function precis(precision) {
    return Math.random() <= precision

}

// On fait la fonction d'attaque

function attaque(attaquant,defenseur) {
    if (precis(attaquant.precision)) {
        defenseur.vie = defenseur.vie - attaquant.attaque
        if (defenseur.vie<0){
            defenseur.vie=0;
        }
        console.log (`${attaquant.nom} a frappé son adversaire ${defenseur.nom} et lui a infligé ${attaquant.attaque} de dégats`)
    }
    else {
        console.log (`${attaquant.nom} a complètement raté son attaque sur ${defenseur.nom}`)
    }
    console.log (`${defenseur.nom} a désormais ${defenseur.vie} de vie`)
}

// On commence par simuler le combat

while(personnage1.vie>0 && personnage2.vie>0) {
        attaque(personnage1, personnage2);
    if (personnage2.vie <=0){
        console.log(`${personnage2.nom} est mort et a été vaincu`)
        console.log(`${personnage1.nom} est le grand gagnant de ce combat !`)
        }
    else if (personnage1.vie<=0)
        console.log(`${personnage1.nom} est vaincu, il est l'heure de féliciter ${personnage2.nom}, c'est lui le grand vainqueur !`)
    }
    
        
