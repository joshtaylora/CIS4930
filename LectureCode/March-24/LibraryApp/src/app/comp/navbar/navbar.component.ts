import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  userIsLoggedIn = false;

  faSignInIcon = faSignInAlt;
  faRegisterIcon = faUserPlus;

  constructor(private userSvc:UserService, private router:Router) {
    let userLoggedIn = localStorage.getItem('userIsLoggedIn');
    if (userLoggedIn != null) {
      this.userIsLoggedIn = JSON.parse(userLoggedIn);
    }

    this.userSvc.UserStateChanged.subscribe((userLoggedInMsg)=> {
      this.userIsLoggedIn = userLoggedInMsg;
    });
  }

  ngOnInit(): void {}

  LogoutUser() {
    localStorage.removeItem('userIsLoggedIn');
    this.userIsLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
