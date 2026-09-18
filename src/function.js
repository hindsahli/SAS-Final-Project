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
  console.log("6. Rechercher un apprenant par le nom complet");
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

//searches for an apprenant by id, one by one (linear search)
export function trouverApprenantParId(apprenants, id) {
  for (let i = 0; i < apprenants.length; i++) {
    if (apprenants[i].id === id) {
      return apprenants[i];
    }
  }
  return undefined;
}

//progression = (somme de tous les exercicesTermines / somme de tous les totalExercices) × 100
export function calculerProgression(apprenant) {
  let totalTermines = 0;
  let totalProposes = 0;

  for (let i = 0; i < apprenant.resultats.length; i++) {
    totalTermines = totalTermines + apprenant.resultats[i].exercicesTermines;
    totalProposes = totalProposes + apprenant.resultats[i].totalExercices;
  }
  let progression = (totalTermines / totalProposes) * 100;
  return progression.toFixed(2);
}

// this one counts how many challenges are done
export function compterChallenges(apprenant) {
  let challengesTermines = 0;
  for (let i = 0; i < apprenant.resultats.length; i++) {
    if (apprenant.resultats[i].challengeTermine === true) {
      challengesTermines = challengesTermines + 1;
    }
  }
  return challengesTermines;
}

// this one checks how many days the apprenant missed
export function trouverJoursManquants(apprenant) {
  let joursManquants = [];
  for (let i = 1; i <= 7; i++) {
    let trouve = false;
    for (let j = 0; j < apprenant.resultats.length; j++) {
      if (apprenant.resultats[j].jour === i) {
        trouve = true;
      }
    }
    if (trouve === false) {
      joursManquants.push(i);
    }
  }
  return joursManquants;
}

// this one displays the full apprenant fiche: nomComplet, ville, progression....
export function construireFicheApprenant(apprenant, progression) {
  if (apprenant == undefined) {
    return "Erreur : aucun apprenant trouvé avec cet identifiant.";
  } else console.log("------------ Fiche apprenant ------------");
  console.log(`Identifiant          : ${apprenant.id}`);
  console.log(`Nom Complet          : ${apprenant.nomComplet}`);
  console.log(`Ville                : ${apprenant.ville}`);
  console.log(`Progression          : ${progression}`);
  console.log(`Journées renseignées : ${apprenant.resultats.length} `);
  console.log(`Challenges terminés  : ${compterChallenges(apprenant)}`);
  console.log(`Jours manquants      : ${trouverJoursManquants(apprenant)}`);
  console.log("-----------------------------------------");
}

export function trouverApprenantParNom(apprenants, nom) {
  for (let i = 0; i < apprenants.length; i++) {
    if (apprenants[i].nomComplet.includes(nom)) return apprenants[i];
    break;
  }
  return undefined;
}

// takes the progression and returns the level of the apprenant
export function determinerNiveau(progression) {
  if (progression >= 80) {
    return "Solide";
  } else if (progression >= 50) {
    return "En progression";
  } else {
    return "À renforcer";
  }
}

//this one takes the level wanted and returns an array of the apprenant with that level
export function filtrerParNiveau(apprenants, niveau) {
  let resultats = [];
  for (let i = 0; i < apprenants.length; i++) {
    let progression = calculerProgression(apprenants[i]);
    let niveauApprenant = determinerNiveau(progression);
    if (niveauApprenant === niveau) {
      resultats.push(apprenants[i]);
    }
  }
  return resultats;
}