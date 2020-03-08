import { Router } from '@angular/router';
import { Movie } from './../models/movie.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private movies: Movie[] = [];
  private updatedMovies = new Subject<Movie[]>();
  url = 'https://interview-movies.herokuapp.com/api/movies';

  constructor(private http: HttpClient, private router: Router) { }

  getUpdatedMoviesListener() {
    return this.updatedMovies.asObservable();
  }

  getMovies() {
    return this.http.get<Movie[]>(this.url)
    .pipe(
      tap((movies) => {
        console.log(movies);
        this.movies = movies;
        this.updatedMovies.next([...this.movies]);
      })
    );
  }

  getMovie(movieId: number) {
    return this.http.get<Movie>(`${this.url}/${movieId}`);
  }

  addMovie(title: string, plot: string, genre: string) {
    const movieData = { title, plot, genre };
    return this.http.post(`${this.url}`, movieData)
    .pipe(
      tap(() => {
        this.getMovies().subscribe();
        this.router.navigateByUrl('/');
      })
    );
  }

  updateMovie(movieId: number, title: string, plot: string, genre: string) {
    const movieData = { title, plot, genre };
    return this.http.put(`${this.url}/${movieId}`, movieData).pipe(
      tap(() => {
        this.getMovies().subscribe();
        this.router.navigateByUrl('/');
      })
    );
  }

  deleteMovie(movieId: number) {
    return this.http.delete(`${this.url}/${movieId}`).pipe(
      tap(() => {
        this.getMovies().subscribe();
        this.router.navigateByUrl('/');
      })
    );
  }


}
