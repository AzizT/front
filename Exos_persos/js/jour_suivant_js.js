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

const today = "vendredi";
let demain = "";
if (today == "lundi") {
    demain = "mardi";  } else if (today == "mardi"){
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
    console.log(`Demain, nous serons ${demain}`);
    document.write(`Demain, nous serons ${demain}`);
}
// pas de simples ou doubles quotes, mais l' accent grave