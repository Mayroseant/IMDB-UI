import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MovieServiceService } from '../services-models/movie-service.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movielist: any;
  ReviewForm = new FormGroup({
    Comment: new FormControl('', [Validators.required]),
    MovieId: new FormControl(''),
    Mail: new FormControl('')
  });
  reviewlist: [];

  a = [{id1:1, id2:2, id3:3}, {id1:4, id2:5, id3:6}, {id1:4, id2:5, id3:6}, {id1:4, id2:5, id3:6}, {id1:4, id2:5, id3:6}]

  constructor(public service: MovieServiceService) { }

  ngOnInit(): void {
    this.getmovielist();
  }

  getmovielist(){
    this.service.movielist()
      .subscribe(data =>{
        this.movielist = data;
      });
  }
  
  onSubmit() {
    
    this.service.addreview(this.ReviewForm.value)
    .subscribe();
  }

  get Comment(){
    return this.ReviewForm.get('Comment');
  }

  get MovieId(){
    return this.ReviewForm.get('MovieId');
  }

  get Mail(){
    return this.ReviewForm.get('Mail');
  }
}
