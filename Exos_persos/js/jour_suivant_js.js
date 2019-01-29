// const jourActuel = "mardi";
// let jourSuivant = "";

// // Solution avec un if
// if (jourActuel === "lundi") {
//   jourSuivant = "mardi";
// } else if (jourActuel === "mardi") {
//   jourSuivant = "mercredi";
// } else if (jourActuel === "mercredi") {
//   jourSuivant = "jeudi";
// } else if (jourActuel === "jeudi") {
//   jourSuivant = "vendredi";
// } else if (jourActuel === "vendredi") {
//   jourSuivant = "samedi";
// } else if (jourActuel === "samedi") {
//   jourSuivant = "dimanche";
// } else if (jourActuel === "dimanche") {
//   jourSuivant = "lundi";
// } else {
//   console.log("Erreur : jour non reconnu !");
//   document.write("Erreur : jour non reconnu !");
// }
// if (jourSuivant !== "") {
//     console.log(`Demain, nous serons ${jourSuivant}`);
//     document.write(`Demain, nous serons ${jourSuivant}`);
// }

// const today = "vendredi";
// let demain = "";
var today;
var demain;
var today = prompt("Quel jour sommes nous ?");
if (today == "lundi") {
    demain = "mardi";  
} else if (today == "mardi"){
    demain = "mercredi";
} else if (today == "mercredi"){
    demain = "jeudi";
} else if (today == "jeudi"){
    demain = "vendredi";
} else if (today == "vendredi"){
    demain = "samedi";
} else if (today == "samedi"){
    demain = "dimanche";
} else if (today == "dimanche"){
    demain = "lundi";
} else {
    console.log("Erreur, jour non reconnu !");
    document.write("Erreur, jour non reconnu");
}
if (demain != "") {
    console.log("Demain, nous serons " + demain);
    document.write("Demain, nous serons " + demain);
}

/* le même avec switch-------------------*/
var jour = prompt("Quel jour sommes nous ?");
switch(jour){
    case 'lundi':
    document.write("Demain, nous serons mardi");
    break;
    case 'mardi':
    document.write("Demain, nous serons mercredi");
    break;
    case 'mercredi':
    document.write("Demain, nous serons jeudi");
    break;
    case 'jeudi':
    document.write("Demain, nous serons vendredi");
    break;
    case 'vendredi':
    document.write("Demain, nous serons samedi");
    break;
    case 'samedi':
    document.write("Demain, nous serons dimanche");
    break;
    case 'dimanche':
    document.write("Demain, nous serons lundi");
    break;//ce break sert a sortir du switch d' avant
    default:
    break;//celui ci sert a sortir définitivement du programme
}


