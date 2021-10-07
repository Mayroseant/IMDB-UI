import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieModel } from './movie-model.model';
import { ReviewModel } from './review-model.model';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  readonly APIUrl = 'http://localhost:56671/api/Movie';

  constructor(private http: HttpClient) { }

  movieformData: MovieModel = new MovieModel();
  reviewformData: ReviewModel = new ReviewModel();

  movielist(): Observable<MovieModel[]>{
    return this.http.get<MovieModel[]>(this.APIUrl + '/MovieList');
  }

  moviebyid(id: number): Observable<MovieModel>{
    return this.http.get<MovieModel>(this.APIUrl + '/MovieById' + '/' + id);
  }

  addmovie(movie: MovieModel): Observable<boolean>{
    return this.http.post<boolean>(this.APIUrl + '/AddMovie', movie);
  }

  addreview(review: ReviewModel): Observable<ReviewModel>{
    return this.http.post<ReviewModel>(this.APIUrl + '/AddReview', review);
  }
}
