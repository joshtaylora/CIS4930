import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/mock-users';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private userService: UserService) {}

  firstName: string = '';
  lastName: string = '';
  emailAddress: string = '';
  userId: string = '';
  password: string = '';

  userData: {firstname: string, lastName: string, emailAddress:string, userId: string, password: string}|null = null;

  user:User|null = null

  message:string = '';

  success:boolean = false;


  ngOnInit(): void {
    this.success = true;
  }

  changeAlert(): void {
    this.success = false;
    this.message = 'An error has occurred';
  }

  CreateUser(): void {
    if (this.user !== null) {
    this.userService.CreateUser(this.userData);
  }
}

  onSubmit(): void {
    this.user = new User(
      this.userId,
      this.firstName,
      this.lastName,
      this.emailAddress,
      this.password 
    );
    this.userService.addUser(this.user);
  }
}
