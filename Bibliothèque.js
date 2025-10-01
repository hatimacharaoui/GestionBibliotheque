const prompt = require("prompt-sync")();

function MenuPrincipal() {
  do {
    console.log("---------------------------------------------");
    console.log("*********  Bibliothèque Municipale  *********");
    console.log("---------------------------------------------");
    console.log("1. Introduire un livre ");
    console.log("2. Ajouter plusieurs livres ");
    console.log("3. Opérations sur les livres ");
    console.log("4. Gestion des abonnés ");
    console.log("5. Gestion des emprunts ");
    console.log("6. Quitter l’application ");
    choix = +prompt("Choisissez une option: ");
  } while (choix < 1 || choix > 6);
  return choix;
}

function IntroduireLivre() {
  console.log("*********  Introduire un Livre  *********\n");
  console.log("ISBN : Numéro d'identification international du livre.");
  console.log("Titre : Nom de l'ouvrage.");
  console.log("Auteur : Personne qui a écrit le livre.");
  console.log(
    "Année de publication : La date à laquelle le livre a été publié."
  );
  console.log(
    "Disponible (Oui/Non) : Un indicateur de la présence de l'ouvrage dans la bibliothèque"
  );
}

function Opérationslivres() {
  let choix1;
  do {
    console.log("*********  Opérations sur les livres  *********\n");
    console.log("1. Afficher tous les livres ");
    console.log("2. Trier les livres par titre (ascendant/descendant)");
    console.log("3. Trier les livres par année de publication ");
    console.log("4. Afficher uniquement les livres disponibles ");
    console.log("5. Rechercher un livre par ISBN ");
    choix1 = +prompt("Choisissez une option: ");
  } while (choix1 < 1 || choix1 > 5);
  return choix1;
}

let Abonné = [];
let Emprunt = [];
let livres = [
  {
    isbn: "123",
    titre: "ALe Petit Prince",
    auteur: "Saint-Exupéry",
    annee: 1943,
    disponible: false,
  },
  {
    isbn: "456",
    titre: "CL'Étranger",
    auteur: "Camus",
    annee: 1942,
    disponible: true,
  },
  {
    isbn: "789",
    titre: "BLe Père Goriot",
    auteur: "Honoré de Balzac",
    annee: 1944,
    disponible: true,
  },
];

function AfficherLivres(livres) {
  let i = 1;
  for (const key in livres) {
    let Dispo;
    if (livres[key].disponible == true) {
      Dispo = "Oui";
    } else {
      Dispo = "Non";
    }

    console.log(
      "Livre " +
        i++ +
        " :" +
        "\nISBN: " +
        livres[key].isbn +
        " ,Titre: " +
        livres[key].titre +
        " ,Auteur: " +
        livres[key].auteur +
        " ,Année: " +
        livres[key].annee +
        " ,Disponible: " +
        Dispo
    );
  }
}

function AjouterLivres() {
  let repeter;
  do {
    let ISBN = +prompt("Entrer un ISBN: ");
    let Titre = prompt("Entrer un Titre: ");
    let Auteur = prompt("Entrer un Auteur: ");
    let Année = +prompt("Entrer l'Année de publication: ");

    let livre = {};
    livre.isbn = ISBN;
    livre.titre = Titre;
    livre.auteur = Auteur;
    livre.annee = Année;
    livre.disponible = true;

    livres.push(livre);

    repeter = prompt("Vous souhaitez ajouter un autre livre ? (oui/non): ");
  } while (repeter === "oui");
}

function TrierLivresParTitre() {
  let Triertitre;
  do {
    console.log("1. Trier les livres par titre (descendant) ");
    console.log("2. Trier les livres par titre (ascendant) ");
    Triertitre = +prompt("Choisissez une option: ");
  } while (Triertitre < 1 || Triertitre > 2);
  if (Triertitre == 1) {
    let titles = livres.map((l) => l.titre);
    titles.sort((a, b) => a.localeCompare(b));
    let livreTitre = [];
    for (let i = 0; i < titles.length; i++) {
      for (let j = 0; j < livres.length; j++) {
        if (titles[i] === livres[j].titre) {
          livreTitre.push(livres[j]);
        }
      }
    }
    console.log(livreTitre);
  } else if (Triertitre == 2) {
    let titles = livres.map((l) => l.titre);
    titles.sort((a, b) => b.localeCompare(a));
    let livreTitre = [];
    for (let i = 0; i < titles.length; i++) {
      for (let j = 0; j < livres.length; j++) {
        if (titles[i] === livres[j].titre) {
          livreTitre.push(livres[j]);
        }
      }
    }
    console.log(livreTitre);
  }
}

function TrierLivresParAnnée() {
  let Annee = livres.map((l) => l.annee);
  Annee.sort(function (a, b) {
    return a - b;
  });
  let livreAnnee = [];
  for (let i = 0; i < Annee.length; i++) {
    for (let j = 0; j < livres.length; j++) {
      if (Annee[i] === livres[j].annee) {
        livreAnnee.push(livres[j]);
      }
    }
  }
  console.log(livreAnnee);
}

function AfficherLivresDisponibles() {
  let i = 1;
  for (const key in livres) {
    let Dispo;
    if (livres[key].disponible == true) {
      Dispo = "Oui";
    } else {
      Dispo = "Non";
    }
    if (livres[key].disponible == true) {
      console.log(
        "Livre " +
          i++ +
          " :" +
          "\nISBN: " +
          livres[key].isbn +
          " ,Titre: " +
          livres[key].titre +
          " ,Auteur: " +
          livres[key].auteur +
          " ,Année: " +
          livres[key].annee +
          " ,Disponible: " +
          Dispo
      );
    }
  }
}

function RechercherLivreParISBN() {
  let isbn = prompt("entrer un ISBN : ");
  let recherche = livres.find((t) => t.isbn == isbn);
  console.log(recherche);
}

function GestionAbonnés() {
  let choix2;
  do {
    console.log("1. Ajouter un abonné ");
    console.log("2. Afficher tous les abonnés ");
    choix2 = +prompt("Choisissez une option: ");
  } while (choix2 < 1 || choix2 > 2);
  return choix2;
}

function AjouterAbonné() {
  let Nom = prompt("Entrer le Nom: ");
  let Prénom = prompt("Entrer le Prénom: ");
  let Email = prompt("Entrer l'Email: ");
  let abonné = {};
  abonné.id = Abonné.length + 1;
  abonné.nom = Nom;
  abonné.prénom = Prénom;
  abonné.email = Email;

  Abonné.push(abonné);
  return Abonné;
}

function AfficherLesAbonnés() {
  for (const key in Abonné) {
    console.log(
      "Id: " +
        Abonné[key].id +
        " ,Nom: " +
        Abonné[key].nom +
        " ,Prénom: " +
        Abonné[key].prénom +
        " ,Email: " +
        Abonné[key].email
    );
  }
}

function GestionEmprunts() {
  let choix3;
  do {
    console.log("1. Enregistrer un emprunt ");
    console.log("2. Enregistrer un retour ");
    console.log("3. Afficher les livres empruntés ");
    choix3 = +prompt("Choisissez une option: ");
  } while (choix3 < 1 || choix3 > 2);
  return choix3;
}

function EnregistrerEmprunt() {
  let id = prompt("Entrer un ID: ");
  let isbn = prompt("Entrer l'ISBN du livre que vous souhaitez emprunter: ");
  let emprunt = {};
  let recherche = livres.find((t) => t.isbn === isbn);
  if (recherche.disponible == true) {
    recherche.disponible = false;
    emprunt.id = id;
    emprunt.isbn = isbn;
    Emprunt.push(emprunt);
    console.log("L'abonné " + id + " a emprunté le livre " + isbn);
  } else {
  }
  return Emprunt;
}

function EnregistrerRetour() {
  let isbn = prompt("Entrer l'ISBN du livre: ");

  let recherche = livres.find((t) => t.isbn === isbn);
  if (recherche.disponible == false) {
    recherche.disponible = true;

    for (let i = 0; i < Emprunt.length; i++) {
      if (Emprunt[i].isbn === isbn) {
        Emprunt.splice(i, 1);
        break;
      }
    }
    console.log("Le livre " + isbn + " a été retourné.");
  } else {
    console.log("Ce livre n'était pas emprunté.");
    
  } 
}

function main() {
  let choix;
  do {
    choix = MenuPrincipal();
    switch (choix) {
      case 1:
        IntroduireLivre();
        break;
      case 2:
        AjouterLivres();
        break;
      case 3:
        let choixOpérations = Opérationslivres();
        if (choixOpérations == 1) {
          AfficherLivres(livres);
        } else if (choixOpérations == 2) {
          TrierLivresParTitre();
        } else if (choixOpérations == 3) {
          TrierLivresParAnnée();
        } else if (choixOpérations == 4) {
          AfficherLivresDisponibles();
        } else if (choixOpérations == 5) {
          RechercherLivreParISBN();
        }
        break;
      case 4:
        let choixAbonné = GestionAbonnés();
        if (choixAbonné == 1) {
          AjouterAbonné();
        } else if (choixAbonné == 2) {
          AfficherLesAbonnés();
        }
        break;
      case 5:
        let choixEmprunt = GestionEmprunts();
        if (choixEmprunt == 1) {
          EnregistrerEmprunt();
        } else if (choixEmprunt == 2) {
          EnregistrerRetour();
        } else if (choixEmprunt == 3) {
        }
        break;
      case 6:
        console.log("Au revoir");
        break;
    }
  } while (choix !== 6);
}

main() 
