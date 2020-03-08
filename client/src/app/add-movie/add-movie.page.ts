import { MoviesService } from './../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.page.html',
  styleUrls: ['./add-movie.page.scss'],
})
export class AddMoviePage implements OnInit {

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
  }

  submitMovie(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.moviesService.addMovie(form.value.title, form.value.plot, form.value.genre)
    .subscribe(res => {
      console.log(res);
    }, error => {
      console.log(error);
    });
  }

}
