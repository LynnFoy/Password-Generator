const lengthInput = document.getElementById("length"); 
const uppercaseCheckbox = document.getElementById("uppercase"); 
const lowercaseCheckbox = document.getElementById("lowercase"); 
const numbersCheckbox = document.getElementById("numbers"); 
const symbolsCheckbox = document.getElementById("symbols"); 
const generateButton = document.getElementById("generate"); 
const passwordInput = document.getElementById("password"); 
const copyButton = document.getElementById("copy"); 
const alertOverlay = document.getElementById("alert-overlay"); 
const alertOkButton = document.getElementById("alert-ok");

//Définire l'ensemble des caractères
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"; 
const numbers = "0123456789"; 
const symbols = "!@#$%^&*()_+[]{}|;:,.<>?"; 

//Fonction pour générer un mot de passe
function generatePassword() {
  let length = parseInt(lengthInput.value); 

  //Vérifie si la longueur est dans les limites autorisées
  if (length < 10) {
    length = 10;  
    lengthInput.value = 10;  
  } else if (length > 20) {
    length = 20; 
    lengthInput.value = 20;  
  }

  let characterPool = ""; 
  let password = ""; 

  //Ajout des types de caractères 
  if (uppercaseCheckbox.checked) characterPool += uppercaseLetters; 
  if (lowercaseCheckbox.checked) characterPool += lowercaseLetters; 
  if (numbersCheckbox.checked) characterPool += numbers; 
  if (symbolsCheckbox.checked) characterPool += symbols; 

  //Vérifie que le pool de caractères n'est pas vide
  if (characterPool.length === 0) {
    alert("Please select at least one character type."); 
    return; 
  }

  //Génère le mot de passe 
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characterPool.length); 
    password += characterPool[randomIndex]; 
  }

  //Affiche le mot de passe généré 
  passwordInput.value = password;
}

//Ajout d'un bouton "Generate Password"
generateButton.addEventListener("click", generatePassword);

//Gestion du bouton "Copier"
copyButton.addEventListener("click", () => {
  if (passwordInput.value) { 
    navigator.clipboard.writeText(passwordInput.value).then(() => { 
      alertOverlay.style.display = "flex"; 
    });
  }
});

//Gestion pour le bouton alerte
alertOkButton.addEventListener("click", () => {
  alertOverlay.style.display = "none"; 
});



