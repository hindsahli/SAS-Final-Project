import { apprenants } from "./data.js";
import {
  afficherMenu,
  afficherListeApprenants,
  ajouterApprenant,
} from "./function.js";
import promptSyncModule from "prompt-sync";

const prompt = promptSyncModule();

let estVrai = true;
while (estVrai) {
  afficherMenu();
  let choix = Number(prompt("Votre choix : "));

  switch (choix) {
    case 1:
      break;
    case 2:
      afficherListeApprenants(apprenants);
      break;
    case 3:
      let nomComplet = prompt("Nom complet : ");
      let ville = prompt("Ville : ");
      let message = ajouterApprenant(apprenants, nomComplet, ville);
      console.log(message);
      break;
    case 4:
      break;
    case 5:
      break;
    case 6:
      break;
    case 7:
      break;
    case 8:
      break;
    case 9:
      break;
    case 0:
      console.log("Programme terminé. À bientôt !");
      estVrai = false;
      break;
  }
}
