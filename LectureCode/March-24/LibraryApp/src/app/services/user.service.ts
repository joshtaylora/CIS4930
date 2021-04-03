import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import jwt_decode from 'jwt-decode';

import { User, USERS } from '../mock-users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  @Output() UserStateChanged = new EventEmitter<boolean>();

  constructor(private httpC: HttpClient) {}

  private usersURL = 'http://localhost:3000/Users/';

  userIsLoggedIn: boolean = false;
  userName = 'admin';
  password = 'JoshTaylor';
  users = USERS;

  Login(userName: string, password: string) {
    // CORS implementation in express app
    return this.httpC.get<{ token: string }>(
      `https://localhost:3000/Users/${userName}/${password}`
    );
  }

  CreateUser(userData: {
    userId: string;
    firstName: string;
    lastName: string;
    emailAddress: string;
    password: string;
  }) {
    console.log(userData);
    return this.httpC.post<{
      userId: string;
      firstName: string;
      lastName: string;
      emailAddress: string;
      password: string;
    }>('https://localhost:3000/Users', userData);
  }

  SetUserLoggedIn(userToken: { token: string }) {
    localStorage.setItem('token', JSON.stringify(userToken));
    this.UserStateChanged.emit(true);
  }

  SetUserAsLoggedOff(userToken: { token: string }) {
    localStorage.removeItem('token');
    this.UserStateChanged.emit(false);
  }

  GetLoggedInUser() {
    let tokenStr = localStorage.getItem('token');
    if (tokenStr !== null) {
      let tokenObj = JSON.parse(tokenStr) as { token: string };
      let tokenInfo = jwt_decode(tokenObj.token);
      return tokenInfo;
    }
  }

  getUsers(): Observable<User[]> {
    return this.httpC.get<User[]>(this.usersURL);
  }

  getUser(userName: string): Observable<User> {
    return this.httpC.get<User>(`https://localhost:3000/Users/${userName}`);
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
