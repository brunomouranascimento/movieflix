import { Component, OnInit } from '@angular/core';

import { Movie } from 'src/app/models/movie';
import { MovieflixService } from './movieflix.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movieflix',
  templateUrl: './movieflix.component.html',
  styleUrls: ['./movieflix.component.scss']
})
export class MovieflixComponent implements OnInit {

  movies: Movie[];
  public lottieConfig: object;
  private anim: any;

  private animationSpeed = 1;
  episode_id = 'episode_id';

  constructor(private movieflixService: MovieflixService, private router: Router) {
    this.lottieConfig = {
      path: '../../../assets/lottie/bb8.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
    };
  }

  getPoster(filmID: number) {
    return `../../../assets/images/${filmID}.jpg`;
  }

  ngOnInit() {
    this.movieflixService.getMovies().subscribe(data => {
      this.movies = data.results as Movie[];
    });
  }

}
