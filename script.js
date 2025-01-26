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
