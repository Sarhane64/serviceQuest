import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { nasa } from './model/nasamodel.js';

@Injectable({
  providedIn: 'root',
})
export class NasaService {
  constructor(private http: HttpClient) {}

  getDataImgTheDay(): Observable<nasa> {
    return this.http.get<nasa>(
      'https://api.nasa.gov/planetary/apod?api_key=3pc0jfcd9Hj8gsyZQlt4Y0mNxahv4mvRGrgnQXc8'
    );
  }
}
