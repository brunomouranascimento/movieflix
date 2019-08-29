import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

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
  episode_id = 'episode_id';

  constructor(private movieflixService: MovieflixService, private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
    this.movieflixService.getMovies().subscribe(data => {
      this.movies = data['results'] as Movie[];
      console.log(data);
    });
  }

}
