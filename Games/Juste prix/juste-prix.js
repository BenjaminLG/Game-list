// Etape 1 - Sélectionner les éléments
const input        = document.querySelector('#prix');
const error        = document.querySelector('small');
const form         = document.querySelector('#form');

// Etape 2 - Cacher l'erreur
error.style.display = "none";

// Etape 3 - Générer un nombre aléatoire
const nombreAleatoire = Math.floor(Math.random() * 1001); 

let coups = 0; // Etape 5
let nombreChoisi; // Etape 5

// Etape 6 - Créer la fonction vérifier
function verifier(nombre) {
  
  const instruction = document.createElement('div');
  
  if(nombre < nombreAleatoire) {
    instruction.textContent = "#" + coups + "(" + nombre + ") - C'est plus !";
    instruction.className = "instruction more";
    
  }
  else if(nombre> nombreAleatoire) {
    instruction.textContent = "#" + coups + "(" + nombre + ") - C'est moins !";
    instruction.className = "instruction less";
  }
  else {
    instruction.textContent = "#" + coups + "(" + nombre + ") - Félicitations vous avez trouvé le juste prix !";
    instruction.className = "instruction finished";
    input.disabled = true;
  }
  // Ajouter l'élément devant les autres
  document.querySelector('#instructions').prepend(instruction);
}

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener('keyup', () => {
  if(isNaN(input.value)) {
    error.style.display = "inline";
  }
  else {
    error.style.display = "none";
  }
});

// Etape 5 - Agir à l'envoi du formulaire
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  //verifie que input.value n'est pas un nombre, input.value soit vide
  if(isNaN(input.value), input.value == '') {
    input.style.borderColor = "red";
  }
  else {
    coups++;
    input.style.borderColor = "silver";
    nombreChoisi = input.value;
    input.value = ''; // cela efface le numero une fois valider
    verifier(nombreChoisi);
  }
});