/* ----------------------les conditions-----------------------
L' instruction "if" execute une instruction si une condition donnée est vraie.
Si la condition n' est pas vérifiée, il est possible d' utiliser une autre instruction.

------------Structure de base; le IF-------------
if(true){

}
Par défaut, la condition pour vérifier le "if", vérifie si elle est vraie.

var nb1 = 10;
if(nb1 < 50){
    console.log("nb1 est bien inférieur a 50");
    document.write("nb1 est bien inférieur a 50");
}
if(true){

}else{

}

if (nb1>50){
    console.log("nb1 est inférieur a 50");
}else{
    console.log("nb1 n' est pas inférieur a 50");
}

EXO
- Je vérifie l' age de l' internaute, s' il est majeur, je lui souhaite la bienvenue, sinon, je le renvoi vers un autre site ( après lui avoir dit qu' il était mineur)
- Demander l' age de l' internaute en s' assurant que nous avons un NUMBER
- je vérifie s' il est majeur
- si il est mineur, le prévenir, et le rediriger vers un autre site
*/

var ageMajeur = Number(prompt("Bonjour, quel age as-tu ?"));
if(ageMajeur>=18){
    alert("Tu es majeur, tu peux continuer sur mon site");
}else{
    alert("Je suis désolé, tu es mineur, je vais devoir te rediriger vers un autre site. Au revoir !");
    document.location.href="https://www.lagranderecre.fr/";
};