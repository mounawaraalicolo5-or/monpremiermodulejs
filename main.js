


// j'importe la fonction monHeure()

import generateHeure from "./generateHeure.js";
import monHeure from "./generateHeure.js";

console.log("Main - mon Heure:",
generateHeure.monHeure());

let heureActuelle = document.querySelector("#heure");
heureActuelle.textContent = generateHeure.monHeure()
