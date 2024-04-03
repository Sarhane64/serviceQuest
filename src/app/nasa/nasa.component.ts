import { Component } from '@angular/core';
import { NasaService } from '../nasa.service.js';
import { nasa } from '../model/nasamodel.js';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nasa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nasa.component.html',
  styleUrl: './nasa.component.css',
})
export class NasaComponent {
  nasaContent!: nasa;

  constructor(private nasaService: NasaService) {}

  ngOnInit(): void {
    this.nasaService.getDataImgTheDay().subscribe((data) => {
      this.nasaContent = data;
      console.log(this.nasaContent);
    });
  }
}
