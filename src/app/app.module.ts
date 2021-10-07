import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { MoviesComponent } from './movie/movies/movies.component';
import { MoviedetailsComponent } from './movie/moviedetails/moviedetails.component';
import { AddmovieComponent } from './movie/addmovie/addmovie.component';

import { UserServiceService } from './user/services-models/user-service.service';
import { MovieServiceService } from './movie/services-models/movie-service.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    MoviesComponent,
    MoviedetailsComponent,
    AddmovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    UserServiceService,
    MovieServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
