import { apprenants } from "./data.js";

// this function cleans a name , it removes extra spaces and makes it lowercased
export function normaliserLeNom(nom) {
  return String(nom).trim().toLowerCase();
}

//this function displays the Menu on the console
export function afficherMenu() {
  console.log("=====================================================");
  console.log("         SAS PROGRESS CONSOLE");
  console.log("=====================================================");
  console.log("1. Afficher le tableau de bord");
  console.log("2. Afficher la liste des apprenants");
  console.log("3. Ajouter un apprenant");
  console.log("4. Consulter un apprenant par identifiant");
  console.log("5. Ajouter ou modifier le résultat d'une journée");
  console.log("6. Rechercher un apprenant par nom");
  console.log("7. Filtrer les apprenants par niveau");
  console.log("8. Trier les apprenants par progression décroissante");
  console.log("9. Trier les apprenants par ordre alphabétique");
  console.log("0. Quitter");
}

//this function is responsible on displaying the apprenants , one by one
export function afficherListeApprenants(apprenants) {
  console.log("-------- Liste des apprenants --------");
  for (let i = 0; i < apprenants.length; i++) {
    console.log(`ID       : ${apprenants[i].id}`);
    console.log(`Nom      : ${apprenants[i].nomComplet}`);
    console.log(`Ville    : ${apprenants[i].ville}`);
    console.log("--------------------------------------");
  }
}

//this function is responsible on adding new apprenants to the list, with an auto-generated id

export function ajouterApprenant(apprenants, nomComplet, ville) {
  nomComplet = normaliserLeNom(nomComplet);
  ville = normaliserLeNom(ville);
  apprenants.push({
    id: apprenants.length + 1,
    nomComplet: nomComplet,
    ville: ville,
    resultats: [],
  });
  return "Apprenant ajouté avec l'identifiant " + apprenants.length + ".";
}
