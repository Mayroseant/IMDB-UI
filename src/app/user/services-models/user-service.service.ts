import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from './user-model.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  readonly APIUrl = 'http://localhost:56671/api/User';

  constructor(private http: HttpClient) { }

  formData: UserModel = new UserModel();

  loginuser(user: UserModel): Observable<boolean>{
    return this.http.post<boolean>(this.APIUrl + '/Login', user);
  }

  signupuser(user: UserModel): Observable<boolean>{
    return this.http.post<boolean>(this.APIUrl + '/Signup', user);
  }
}
