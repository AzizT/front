import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hero } from './types/hero.type';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const headers = new HttpHeaders({
  'content-type' : 'application/json'
});

const httpOptions = {
  headers
  // équivalent de headers = headers
}

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  // private heroes: Hero[] = [
  //   {id: 1, name: 'Superman'},
  //   {id: 2, name: 'Wonderwoman'},
  //   {id: 3, name: 'Casterman'},
  //   {id: 4, name: 'Captain Algéria'}
  // ];

  private heroesUrl = 'api/heroes';

  // idToGenerate: number = this.heroes.length + 1;

  constructor(private http: HttpClient) {

  }
  // private http: HttpClient;
  getHeroes(): Observable<Hero[]> {
    // methode pour que le tableau heroes ci dessus soit disponible
    return this.http.get<Hero[]>(this.heroesUrl);
    // observable <Hero[]>, désigne un observable qui retournera plus tard un tableau de héros. Le lien entre observable et <Hero[]> est exprimé grace a la GENERICITE ( la présence de chevron)
    // la généricité permet aussi de dire a notre client http, que nous lui demandons de créer un observable qui nous renverra un tableau de héros
  }

  createHero(name: string): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, { name }, httpOptions);
  }

  getHeroById(id: number): Observable<Hero> {
        return this.http.get<Hero>(this.heroesUrl + '/' + id);
    // pour parcourir tous les éléments de notre tableau
  // if (id === hero.id) {
    //     return hero;
    //   }
    // }
    // return null;
    // return this.heroes.find(hero => hero.id === id);
    // version simplifiée de ci dessus. Elle fait appel a la methode find
  }
}
