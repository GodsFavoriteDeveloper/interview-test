import { Movie } from './../models/movie.model';
import { Router, ActivatedRoute } from '@angular/router';
import { MoviesService } from './../services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.page.html',
  styleUrls: ['./movie-detail.page.scss'],
})
export class MovieDetailPage implements OnInit {
  movie: Movie;

  constructor(
    private moviesService: MoviesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      console.log(paramMap);
      const movieId = +paramMap.get('movieId');
      this.moviesService.getMovie(movieId)
      .subscribe(movie => {
        this.movie = movie;
        console.log(movie);
      }, error => {
        console.log(error);
      });
    });
  }

  deleteMovie(movieId) {
    this.moviesService.deleteMovie(movieId)
    .subscribe(() => {
      console.log('Movie Successfully Deleted');
    });
  }

}
