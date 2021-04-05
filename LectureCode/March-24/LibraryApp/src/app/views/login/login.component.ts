import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userAuthInfo: { userName: string; password: string } | null = null;
  message: string = '';
  success: boolean = false;
  constructor(private userService: UserService, private router: Router) {
    this.userAuthInfo = { userName: '', password: '' };
  }

  ngOnInit(): void {}

  LoginUser(): void {
    if (this.userAuthInfo?.userName !== undefined && this.userAuthInfo.password !== undefined) {
      this.userService
        .Login(this.userAuthInfo?.userName, this.userAuthInfo?.password)
        .subscribe(
          (response) => {
            console.log(response.token);
            this.userService.SetUserLoggedIn(response);
            this.router.navigate(['/home']);
            this.success = true;
            this.message = 'User has successfully logged in';
          },
          (error) => {
            this.success = false;
            this.message = error.error.messsage;
          }
        );
    }
  }
  onSubmit(): void {}
}
