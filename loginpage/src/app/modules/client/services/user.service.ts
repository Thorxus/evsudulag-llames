import { Injectable } from '@angular/core';
import { UserDetail } from '../model/UserModel';
import { UserMockDetail } from '../mock/UserData';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public userLogin(user: any): Observable<any> {
    return this.http.post('http://localhost:8000/login', user)
  }

  // constructor() { }

  // private loggedInUser: UserDetail | null = null;

  // login(username: string, password: string) : boolean {
  //   const user = UserMockDetail.find(u => u.username === username && u.password === password);

  //   if(user) {
  //     this.loggedInUser = user;
  //     return true;
  //   } 
  //   return false;
  // }

  // getLoggedInUser(): UserDetail | null {
  //   return this.loggedInUser;
  // }
}
