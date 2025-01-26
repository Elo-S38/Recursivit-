const dossierPrincipal = {
  nom: "Ada",
  contenu: [
    {
      nom: "Projets collectifs Ada",
      contenu: [
        {
          nom: "Pico8",
          contenu: [
            {
              nom: "mariokart.p8",
            },
          ],
        },
        {
          nom: "Dataviz",
          contenu: [
            {
              nom: "index.html",
            },
            {
              nom: "script.js",
            },
          ],
        },
      ],
    },
    { nom: "CV.pdf" },
    {
      nom: "Projets persos",
      contenu: [
        {
          nom: "Portfolio",
          contenu: [
            {
              nom: "index.html",
            },
            {
              nom: "script.js",
            },
          ],
        },
      ],
    },
  ],
};

const dossierPrincipal2 = {
  nom: "Ada",
  contenu: {
    nom: "Projets collectifs Ada",
  },
};

// console.log(dossierPrincipal);

//---------------------Etape 1------------------
//fonction afficherDossier qui va afficher le nom du dossier principal en utilisant la variable dossierPrincipal
function afficherDossier(dossier) {
  console.log(dossier.nom);
}

afficherDossier(dossierPrincipal);

//------------------Etape 2----------------------
// fonction afficherDossierIteratif (l’utilisation des instructions for… est autorisée)

function afficherDossierIteratif(dossier) {
  console.log(dossier.nom);
  for (const elt of dossier.contenu) {
    if (elt.contenu) {
      console.log(elt.nom);
    } else {
      console.log(elt.nom);
    }
  }
}

afficherDossierIteratif(dossierPrincipal);

//fonction afficherDossierRecursif

//-----------------Etape 3------------------------
//Complète la fonction pour afficher les dossiers de troisième niveau (ex: les dossiers “Pico 8” et “Dataviz” sont des dossiers de troisième niveau car ils se trouvent dans un dossier “Projets collectifs, lui-même dans le dossier “Ada”).

function afficherDossierIteratif2(dossier) {
  const pile = [dossier]; // On utilise une pile pour parcourir tous les dossiers et fichiers

  while (pile.length > 0) {}
}

afficherDossierIteratif2(dossierPrincipal);

// fonction recursive pour afficher les dossiers de 3eme niveau
function afficherDossierRecursif(dossier) {
  console.log(dossier.nom); // Affiche le nom du dossier

  if (dossier.contenu) {
    for (const elt of dossier.contenu) {
      if (elt.contenu) {
        // Appel récursif pour afficher les sous-dossiers
        afficherDossierRecursif(elt);
      } else {
        // Affiche les fichiers
        console.log(elt.nom);
      }
    }
  }
}

afficherDossierRecursif(dossierPrincipal);
