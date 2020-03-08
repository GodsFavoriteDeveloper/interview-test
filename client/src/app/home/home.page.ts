import { MoviesService } from './../services/movies.service';
import { Movie } from './../models/movie.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  movies: Movie[];
  movies$: Subscription;

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.loadMovies();
    this.movies$ = this.moviesService.getUpdatedMoviesListener()
    .subscribe((movies: Movie[]) => {
      this.movies = movies;
    }, error => {
      console.log(error);
    });
  }

  loadMovies() {
    this.moviesService.getMovies()
    .subscribe(movies => {
      this.movies = movies;
    });
  }

  ngOnDestroy() {
    this.movies$.unsubscribe();
  }

}
