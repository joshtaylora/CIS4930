import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { USERS } from '../mock-users'; // <-- mock users database comes from here
import { UserService } from '../user.service';
import { MessageService } from '../message.service';
@Component({
  // selector - the component's CSS element selector
  selector: 'app-user',
  // templateUrl - the location of the component's template file
  templateUrl: './user.component.html',
  // styleUrls - the location of the component's private CSS styles
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  users: User[] = [];
  selectedUser?: User;
  
  constructor(
    private userService: UserService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.getUsers();
  }

  onSelect(user: User): void {
    this.selectedUser = user;
    this.messageService.add(`UserComponent: Selected user userId=${user.userId}`);
  }
  getUsers(): void {
    this.userService.getUsers().subscribe((users) => (this.users = users));
  }
}
