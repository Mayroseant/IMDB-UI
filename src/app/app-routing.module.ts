import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmovieComponent } from './movie/addmovie/addmovie.component';
import { MoviedetailsComponent } from './movie/moviedetails/moviedetails.component';
import { MoviesComponent } from './movie/movies/movies.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';

const routes: Routes = [
  { path: 'Login', component: LoginComponent},
  { path: 'Signup', component: SignupComponent},
  { path: 'AddMovie', component: AddmovieComponent},
  { path: 'Movies', component: MoviesComponent},
  { path: 'MovieDetails/:id', component: MoviedetailsComponent},
  { path: '',   redirectTo: '/Login', pathMatch: 'full' },
  { path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
