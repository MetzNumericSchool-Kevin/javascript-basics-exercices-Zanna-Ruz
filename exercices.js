const nom_boutique = "SORCIER";

let quantite_potions = 15;
let prix_potion = 2;
let boutique_ouvert = true;

if (boutique_ouvert) {
  console.log("​Bienvenue dans la boutique " + nom_boutique + " Aventurier ! ");
} else {
  console.log(
    "​La boutique " +
      nom_boutique +
      " est fermée, revenez plus tard Aventurier "
  );
}
let nom_sorcier = "Archibald";
let choix = parseInt(
  prompt(`
Bienvenue dans mon humble boutique Aventurier. Que veux-tu savoir ? 🤔
    - 1. Le nom de la boutique
    - 2. Le nom du Sorcier
    - 3. Le prix d'un potion de soin
    - 4. La quantité d'une potion de soin
`)
);

switch (choix) {
  case 1:
    console.log("Le nom de la boutique: " + nom_boutique);
    break;
  case 2:
    console.log("Le nom du Sorcier" + nom_sorcier);
    break;
  case 3:
    console.log(`Le prix d'un potion de soin ${prix_potion}`);
    break;
  case 4:
    console.log(` La quantité d'une potion de soin  ${quantite_potions}`);
    break;

  default:
    console.log(
      "​Mh... Désolé aventurier, je ne comprends pas ce que tu souhaites. Refais ton choix ! 😕"
    );
    break;
}
