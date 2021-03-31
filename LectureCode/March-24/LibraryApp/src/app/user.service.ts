import { Injectable } from '@angular/core';
import { User, USERS } from './mock-users'; 

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  users = USERS;

  addUser(user: User) {
    this.users.push(user);
  }
  getUsers() {
    return this.users;
  }
}
