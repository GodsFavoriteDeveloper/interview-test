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

  constructor(
    private moviesService: MoviesService,
    private toastCtrl: ToastController
    ) { }

  ngOnInit() {
  }

  submitMovie(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.moviesService.addMovie(form.value.title, form.value.plot, form.value.genre)
    .subscribe(res => {
      this.showToast('Movie Submitted!!');
    }, error => {
      this.showToast('Failed To Submit!!');
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
