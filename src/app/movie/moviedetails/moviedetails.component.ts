import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MovieServiceService } from '../services-models/movie-service.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {

  constructor(public service: MovieServiceService, private _router: ActivatedRoute) { }

  moviedetails: any;
  review: any;
  ReviewForm = new FormGroup({
    Comment: new FormControl('', [Validators.required]),
    MovieId: new FormControl(''),
    Mail: new FormControl('')
  });

  ngOnInit(): void {
    this._router.params
    .subscribe((param) => {
      const id = Number.parseInt(param['id']);
      this.getmoviedetails(id);
    })
  }

  getmoviedetails(id: any){
    this.service.moviebyid(id)
      .subscribe(data =>{
        this.moviedetails = data;
      });
  }

  onSubmit() {
    this.review= this.ReviewForm.value;
    
    this.service.addreview(this.review)
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
