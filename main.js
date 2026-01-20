


// j'importe la fonction monHeure()

import generateHeure from "./generateHeure.js";

const temps = generateHeure.monHeure();
let heureActuelle = document.querySelector("#heure");
heureActuelle.textContent = `${temps.heure}h ${temps.minute}m ${temps.seconde}s`;
console.log("Main - mon heure : ", heureActuelle.textContent);


// J'importe l'objet utilisateur depuis le fichier user.js
import utilisateur from "./user.js";


// J'affiche les informations de l'utilisateur
// Récupère le span pour afficher le nom
let nomUtilisateur = document.querySelector("#nomUtilisateur");

// Récupère le span pour afficher le prénom
let prenomUtilisateur = document.querySelector("#prenomUtilisateur");

// Récupère le span pour afficher l'email
let emailUtilisateur = document.querySelector("#emailUtilisateur");

// Récupère le span pour afficher le mot de passe
let motDePasseUtilisateur = document.querySelector("#motDePasseUtilisateur");

// Affiche le nom de l'utilisateur dans le span correspondant
nomUtilisateur.textContent = utilisateur.nom;

// Affiche le prénom de l'utilisateur dans le span correspondant
prenomUtilisateur.textContent = utilisateur.prenom;

// Affiche l'email de l'utilisateur dans le span correspondant
emailUtilisateur.textContent = utilisateur.email;

// Affiche le mot de passe de l'utilisateur dans le span correspondant
motDePasseUtilisateur.textContent = utilisateur.motDePasse;

