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
    // if (
    //   this.userAuthInfo?.userName !== undefined &&
    //   this.userAuthInfo.password !== undefined
    // ) {
    //   let result = this.userService.Login(
    //     this.userAuthInfo!.userName,
    //     this.userAuthInfo!.password
    //   );
    //   if (result) {
    //     this.success = true;
    //     this.message = 'You have been successfully logged in';
    //     setTimeout(() => {
    //       this.router.navigate(['/home']);
    //     });
    //   } else {
    //     this.success = false;
    //     this.message = 'Error, the username and password were not correct';
    //   }
    // }
    if (
      this.userAuthInfo !== null
    ) {
      this.userService
        .Login(this.userAuthInfo?.userName, this.userAuthInfo?.password)
        .subscribe(
          (response) => {
            console.log(response.token);
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
