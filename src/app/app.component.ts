import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoktailsListComponent } from './coktails-list/coktails-list.component.js';
import { NasaComponent } from './nasa/nasa.component.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CoktailsListComponent, NasaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'service2';
}
