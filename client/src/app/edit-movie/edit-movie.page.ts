import { Movie } from './../models/movie.model';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MoviesService } from './../services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.page.html',
  styleUrls: ['./edit-movie.page.scss'],
})
export class EditMoviePage implements OnInit {
  movie: Movie;
  movieId: number;

  constructor(
    private moviesService: MoviesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      console.log(paramMap);
      this.movieId = +paramMap.get('movieId');
      this.moviesService.getMovie(this.movieId)
      .subscribe(movie => {
        this.movie = movie;
        console.log(movie);
      }, error => {
        console.log(error);
      });
    });
  }

  updateMovie(form: NgForm) {
    this.moviesService.updateMovie(this.movieId, form.value.title, form.value.plot, form.value.genre)
    .subscribe(res => {
      console.log(res);
    }, error => {
      console.log(error);
    });
  }

}
