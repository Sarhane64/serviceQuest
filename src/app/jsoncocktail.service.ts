import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { coktailOptions } from './model/coktailsmodel.js';

@Injectable({
  providedIn: 'root',
})
export class JsoncocktailService {
  private http = inject(HttpClient);

  constructor() {}

  getCocktails(): Observable<coktailOptions[]> {
    return this.http.get<coktailOptions[]>('assets/data.json');
  }
}
