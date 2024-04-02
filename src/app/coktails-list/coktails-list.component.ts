import { Component } from '@angular/core';
import { JsoncocktailService } from '../jsoncocktail.service.js';
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

  constructor(private JsoncocktailService: JsoncocktailService) {}

  ngOnInit(): void {
    this.JsoncocktailService.getCocktails().subscribe((cok) => {
      this.cocktails = cok;
    });
  }
}
