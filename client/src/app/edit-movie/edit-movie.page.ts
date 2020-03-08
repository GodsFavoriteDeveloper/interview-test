import { ToastController } from '@ionic/angular';
import { Movie } from './../models/movie.model';
import { ActivatedRoute, Router } from '@angular/router';
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
    private activatedRoute: ActivatedRoute,
    private toastCtrl: ToastController,
    private router: Router
    ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.movieId = +paramMap.get('movieId');
      this.moviesService.getMovie(this.movieId)
      .subscribe(movie => {
        this.movie = movie;
      }, error => {
        this.showToast('Error Loading Data');
        this.router.navigateByUrl('/');
      });
    });
  }

  updateMovie(form: NgForm) {
    this.moviesService.updateMovie(this.movieId, form.value.title, form.value.plot, form.value.genre)
    .subscribe(res => {
      this.showToast('Successfully updated movie!!');
    }, error => {
      this.showToast('Failed To Delete!!');
    });
  }

  showToast(message: string) {
    this.toastCtrl.create({
      color: 'dark',
      position: 'top',
      message,
      duration: 2000,
      keyboardClose: true
    }).then(toastEl => {
      toastEl.present();
    });
  }

}
