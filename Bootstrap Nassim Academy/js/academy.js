
var btn = document.getElementById('appli');

function calcul(){

// moyenne_generale.onclick=function calcul(){
 



 var moyenne_maths = Number(prompt("Entre ta moyenne en mathématiques pour ce trimestre"));
 var moyenne_français = Number(prompt("Entre ta moyenne en français pour ce trimestre"));
 var moyenne_svt = Number(prompt("Entre ta moyenne en SVT pour ce trimestre"));
 var moyenne_hg = Number(prompt("Entre ta moyenne en Histoire - Géographie pour ce trimestre"));
 var moyenne_generale =(moyenne_maths + moyenne_français + moyenne_svt + moyenne_hg) / 4;
 if(moyenne_generale < 5){
    window.open(href="file:///C:/xampp/htdocs/front/Nassim%20Academy/page_appreciation/page_appreciation.html", width = 250, height = 250)("Ta moyenne générale de " +moyenne_generale+ " indique que tu es en grande difficulté. Il te faudra travailler bien plus remonter ton niveau global. L' équipe enseignante est prete a t' aider pour atteindre cet objectif");
 } else if(moyenne_generale >= 5 && moyenne_generale < 10){
     alert("Ta moyenne générale de " +moyenne_generale+ " indique que tu es en difficulté. Tu dois fournir un effeort supplémentaire par rapport au trimestre dernier. L' équipe enseignante est prete a t' aider pour atteindre cet objectif");
 } else if(moyenne_generale >= 10 && moyenne_generale <= 12){
     alert("Ta moyenne générale de " +moyenne_generale+ " indique un niveau passable. Ne te contente pas de cela, car nous te pensons capable de bien mieux. L' équipe enseignante est prete a t' aider pour atteindre cet objectif");
 } else if(moyenne_generale > 12 && moyenne_generale < 16){
     alert("Ta moyenne générale de " +moyenne_generale+ " te rapporte les <strong>Compliments</strong> de l' équipe enseignante. Bravo a toi, car ton sérieux et ton implication ont payé au final. Continue ainsi, tu en as toutes les capacités.");
 } else if(moyenne_generale >= 16 && moyenne_generale <= 20){
     alert("Ta moyenne générale de " +moyenne_generale+ " te rapporte les <strong>Félicitations</strong> de l' équipe enseignante. Bravo a toi, tu fais partie des tous meilleurs, et cela grace a ton travail. Continue ainsi, tu en as toutes les capacités.");
 } else{
     alert("Ta moyenne générale indiquée n' existe pas. Tu dois seulement entrer des nombres compris entre 0 et 20. Recommence !");
}
}
btn.addEventListener('click', calcul);