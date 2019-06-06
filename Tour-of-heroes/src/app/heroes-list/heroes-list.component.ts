import { Hero } from './../types/hero.type';
import { HeroesService } from './../heroes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {
  heroes: Hero[] = [];
  heroToAdd = '';
  // idToGenerate = 5;
  selectedHero: Hero;

  constructor(private heroesService: HeroesService) {

   }

  ngOnInit() {
    this.heroesService.getHeroes().subscribe((heroes: Hero[]) =>
      this.heroes = heroes

    );
  }

  selectHero(hero: Hero) {
    this.selectedHero = hero;
  }



  addHero() {
    // const heroName = 'Musulman' ;
    // ne pas utiliser var en TimeScript, utiliser let ou const
    if (this.heroToAdd.trim().length > 0) {

      // on ne veut pas de input restant vide ( tant que vide, pas de " c' est moi")
      //  trim() sert a empecher que l' utilisateur entre des espaces vides, pour contourner le length > 0
      this.heroesService.createHero(this.heroToAdd).subscribe(
        (hero: Hero) => this.heroes.push(hero)
      );
    // this represente la class courante dans laquelle je me trouve, ici, export class AppComponent
    // push => ajouter
      this.heroToAdd = '';
    } else {
      alert( 'le nom du héros ne doit pas rester vide');
      // pour avertir l' utilisateur que l' input ne doit pas rester vide, ou rempli d' espaces
    }
  }

}
