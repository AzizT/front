var nb1;
var nb2;
var nb1 = Number(prompt("Saisissez un premier nombre"));
var nb2 = Number(prompt("Un second a présent"));
var nb3 = 21;
if(nb1>nb2){
    document.write(nb1 + " " + " est supérieur a " + nb2);
} else if(nb1<nb2){
    document.write(nb1 + " " + " est inférieur a " + nb2);
} else if(nb1 === nb2){
    document.write(nb1 + " " + " est égal a " + nb2);
}

if(nb1 && nb2 == nb3 ){
    alert("ils sont égale à 3");
}
/*--------------------Corrigé

var nb1 = (prompt("Saisissez un premier nombre"));
var nb2 = (prompt("Un second a présent"));

if(isNaN(nb1)) && (!isNaN(nb2)){
    if(nb1<nb2){
        document.write(nb1 + " " + " est inférieur a " + nb2);
    }else if(nb1>nb2){
        document.write(nb1 + " " + " est supérieur a " + nb2);
    }else{
        document.write(nb1 + " " + " est égal a " + nb2);
    }
}else{
    alert("Vous n' avez pas saisi de chiffre");
}
 */