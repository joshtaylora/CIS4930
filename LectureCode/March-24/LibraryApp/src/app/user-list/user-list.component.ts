import { Component, OnInit } from '@angular/core';
import { User, USERS } from '../mock-users';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService) { }

  users = this.userService.getUsers();
  ngOnInit(): void {
  }

}
