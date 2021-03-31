import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import jwt_decode from 'jwt-decode';

import { User, USERS} from '../mock-users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  @Output() UserStateChanged = new EventEmitter<boolean>();

  constructor(private httpC: HttpClient) {}

  userIsLoggedIn:boolean = false;
  userName = 'admin';
  password = 'JoshTaylor';
  users = USERS;
  
  Login(userName:string, password:string) {
    return this.httpC.get<{token:string}>(`https://localhost:3000/Users/${userName}/${password}`);
  }


  CreateUser(userData: {firstname: string, lastName: string, emailAddress:string, userId: string, password: string}){
    console.log(userData);
    return this.httpC.post<{firstName:string, lastName:string, emailAddress:string, userId:string,password:string}>('https://localhost:3000/Users',userData);
     
  }
  SetUserLoggedIn(userToken:{token:string})
  {
    localStorage.setItem('token',JSON.stringify(userToken));
    this.UserStateChanged.emit(true);
  }

  SetUserAsLoggedOff(userToken:{token:string})
  {
    localStorage.removeItem('token');
    this.UserStateChanged.emit(false);
  }

  GetLoggedInUser() {
    let tokenStr = localStorage.getItem('token');
    if (tokenStr !== null) {
      let tokenObj = JSON.parse(tokenStr) as {token:string};
      let tokenInfo = jwt_decode(tokenObj.token);
      return tokenInfo;
    }
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
