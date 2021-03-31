import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient} from '@angular/common/http';
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
    if (this.userName===userName && this.password===password) {
      this.userIsLoggedIn = true;
      localStorage.setItem('userIsLoggedIn', JSON.stringify(this.userIsLoggedIn));
      this.UserStateChanged.emit(this.userIsLoggedIn);
      return true;
    } else {
      this.userIsLoggedIn = false;
      localStorage.setItem('userIsLoggedIn', JSON.stringify(this.userIsLoggedIn));
      this.UserStateChanged.emit(this.userIsLoggedIn);
      return false;
    }
  }

  CreateUser(userData: {firstname: string, lastName: string, emailAddress:string, userId: string, password: string}): void {
    console.log(userData);
    return this.httpC.post('http://localhost:3000/Users', null);
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
