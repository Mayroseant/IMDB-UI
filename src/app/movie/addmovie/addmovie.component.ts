import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieServiceService } from '../services-models/movie-service.service';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {

  MovieForm = new FormGroup({
    Name: new FormControl('', [Validators.required]),
    About: new FormControl('', [Validators.required]),
    Genre: new FormControl('', [Validators.required]),
    Director: new FormControl('', [Validators.required]),
    Starring: new FormControl('', [Validators.required]),
    Producer: new FormControl('', [Validators.required]),
    Watchtime: new FormControl('', [Validators.required]),
    Release: new FormControl('', [Validators.required]),
    Poster: new FormControl('', [Validators.required]),
    Trailer: new FormControl('', [Validators.required]),
    Rating: new FormControl('', [Validators.required])
  });

  movie:any;

  constructor(public service: MovieServiceService, private _router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.movie = this.MovieForm.value;
    
    this.service.addmovie(this.movie)
      .subscribe(data => {
        if(data == true){
          this._router.navigateByUrl('/Movies');
        }
        else{
          alert('Existing movie!');
        }
    });
  }

  get Name(){
    return this.MovieForm.get('Name');
  }

  get About(){
    return this.MovieForm.get('About');
  }

  get Genre(){
    return this.MovieForm.get('Genre');
  }

  get Director(){
    return this.MovieForm.get('Director');
  }

  get Starring(){
    return this.MovieForm.get('Starring');
  }

  get Producer(){
    return this.MovieForm.get('Producer');
  }

  get Watchtime(){
    return this.MovieForm.get('Watchtime');
  }

  get Release(){
    return this.MovieForm.get('Release');
  }

  get Poster(){
    return this.MovieForm.get('Poster');
  }

  get Trailer(){
    return this.MovieForm.get('Trailer');
  }

  get Rating(){
    return this.MovieForm.get('Rating');
  }
}
