import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from './user-model.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  readonly APIUrl = 'http://localhost:56671/api';

  constructor(private http: HttpClient) { }

  formData: UserModel = new UserModel();

  loginuser(user: UserModel){
    return this.http.post(this.APIUrl + '/User/Login', user);
  }

  signupuser(user: UserModel){
    return this.http.post(this.APIUrl + '/User/Signup', user);
  }
}
