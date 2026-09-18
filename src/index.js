import { apprenants } from "./data.js";
import {
  afficherMenu,
  afficherListeApprenants,
  ajouterApprenant,
  trouverApprenantParId,
  calculerProgression,
  construireFicheApprenant,
  trouverApprenantParNom,
  filtrerParNiveau,
  determinerNiveau
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
      let ID = Number(prompt("Identifiant de l'apprenant : "));
      let apprenant = trouverApprenantParId(apprenants, ID);
      if (apprenant === undefined) {
        console.log("Erreur : aucun apprenant trouvé avec cet identifiant.");
      } else {
        let progression = calculerProgression(apprenant);
        construireFicheApprenant(apprenant, progression);
      }
      break;
    case 5:
      break;
    case 6:
      let nom = prompt("Nom de l'apprenant complet : ");
      let theApprenant = trouverApprenantParNom(apprenants, nom);
      if (theApprenant === undefined) {
        console.log("Aucun apprenant trouvé.");
      } else {
        let progression = calculerProgression(theApprenant);
        construireFicheApprenant(theApprenant, progression);
      }
      break;
    case 7:
      console.log("Filtrer par niveau :");
      console.log("1. Solide");
      console.log("2. En progression");
      console.log("3. À renforcer");
      let choixNiveau = prompt("Choisissez un niveau : ");
      
      if (choixNiveau === "1") choixNiveau = "Solide";
      else if (choixNiveau === "2") choixNiveau = "En progression";
      else if (choixNiveau === "3") choixNiveau = "À renforcer";

      let apprenantsFiltres = filtrerParNiveau(apprenants, choixNiveau);
      afficherListeApprenants(apprenantsFiltres);
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
