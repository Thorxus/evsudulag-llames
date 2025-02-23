import { Injectable } from '@angular/core';
import { UserDetail } from '../model/UserModel';
import { UserMockDetail } from '../mock/UserData';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private loggedInUser: UserDetail | null = null;

  login(username: string, password: string) : boolean {
    const user = UserMockDetail.find(u => u.username === username && u.password === password);

    if(user) {
      this.loggedInUser = user;
      return true;
    } 
    return false;
  }

  getLoggedInUser(): UserDetail | null {
    return this.loggedInUser;
  }
}
