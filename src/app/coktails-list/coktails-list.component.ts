import { Component, OnInit } from '@angular/core';
import { CoktailsService } from '../coktails.service.js';
import { CommonModule } from '@angular/common';
import { coktailOptions } from '../model/coktailsmodel.js';

@Component({
  selector: 'app-coktails-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coktails-list.component.html',
  styleUrl: './coktails-list.component.css',
})
export class CoktailsListComponent {
  cocktails: coktailOptions[] = [];

  constructor(private coktailsService: CoktailsService) {}

  ngOnInit() {
    this.getCoktail();
  }

  getCoktail() {
    this.cocktails = this.coktailsService.getCocktails();
  }
}
