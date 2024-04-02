import { Injectable } from '@angular/core';
import { coktailOptions } from './model/coktailsmodel.js';

@Injectable({
  providedIn: 'root',
})
export class CoktailsService {
  coktails: coktailOptions[] = [
    {
      name: 'coktails1',
      price: 5,
      img: 'https://www.shutterstock.com/image-illustration/death-cocktail-skull-neon-drink-260nw-2045749178.jpg',
    },
    {
      name: 'coktails2',
      price: 6,
      img: 'https://www.shutterstock.com/image-illustration/death-cocktail-skull-neon-drink-260nw-2045749178.jpg',
    },
    {
      name: 'coktails3',
      price: 7,
      img: 'https://www.shutterstock.com/image-illustration/death-cocktail-skull-neon-drink-260nw-2045749178.jpg',
    },
  ];

  constructor() {}

  getCocktails() {
    return this.coktails;
  }
}
