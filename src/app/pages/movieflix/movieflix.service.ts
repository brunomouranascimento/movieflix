import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { environment } from 'src/environments/environment';

const BASE_URL = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class MovieflixService {

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie> {
    return this.http.get<Movie>(`${BASE_URL}/api/films/`);
  }
}
