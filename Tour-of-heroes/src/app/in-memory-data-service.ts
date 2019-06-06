import { Hero } from './types/hero.type';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const heroes = [
      { id: 11, name: 'Cleptomane' },
      { id: 12, name: 'Poutineman' },
      { id: 13, name: 'Sugarman' },
      { id: 14, name: 'Casterman' },
      { id: 15, name: 'Barman' },
      { id: 16, name: 'Gentleman' },
      { id: 17, name: 'Cartman' },
      { id: 18, name: 'Saruman' },
      { id: 19, name: 'Ottoman' },
      { id: 20, name: 'Dahman' }
    ];

    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length + 11;
  }
}

