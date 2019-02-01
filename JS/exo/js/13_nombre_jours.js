var mois = Number(prompt("Veuillez entrer un chiffre correspondant a un mois"));
if(mois===1){
    alert("Le mois de Janvier comprend 31 jours");
}else if(mois===2){
    alert("Le mois de Fevrier comprend 28 jours");
}else if(mois===3){
    alert("Le mois de Mars comprend 31 jours");
}else if(mois===4){
    alert("Le mois d' Avril comprend 30 jours");
}else if(mois===5){
    alert("Le mois de Mai comprend 31 jours");
}else if(mois===6){
    alert("Le mois de Juin comprend 30 jours");
}else if(mois===7){
    alert("Le mois de Juillet comprend 31 jours");
}else if(mois===8){
    alert("Le mois d' Aout comprend 31 jours");
}else if(mois===9){
    alert("Le mois de Septembre comprend 30 jours");
}else if(mois===10){
    alert("Le mois de Octobre comprend 31 jours");
}else if(mois===11){
    alert("Le mois de Novembre comprend 30 jours");
}else if(mois===12){
    alert("Le mois de Décembre comprend 31 jours");
}else{
    alert("Le chiffre saisi n' est pas correct, veuillez en choisir un entre 1 et 12");
}

/* Correction Sandra avec du OU || pour réduire le code***********************

var mois = parseInt(prompt("Quel mois choisissez-vous", "<saisir un chiffre entre 1 et 12>"));

if (mois === 2) { // si on a choisi février => chiffre 2

   document.write("Le mois numéro " + mois + " fait 28 jours.");

} else if ((mois === 4) || (mois === 6) || (mois === 9) || (mois === 11)){ // si on a choisi un mois qui fait 30 jours

   document.write("Le mois numéro " + mois + " fait 30 jours.");

} else if ((mois === 1) || (mois === 3) || (mois === 5) || (mois === 7) || (mois === :lunettes_de_soleil: || (mois === 10) || (mois === 12)) { // si on a choisi un mois qui fait 31 jours

   document.write("Le mois numéro " + mois + " fait 31 jours.");

} else {

   document.write("Votre choix " + mois + " n'est pas dans le calendrier.");

}

*/

