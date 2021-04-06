import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

import { User } from 'src/app/models/user.model';
import { Token } from 'src/app/models/token.model';
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

  currentUser: Token | null = null;

  constructor(private userSvc: UserService, private router: Router) {}

  ngOnInit(): void {
    this.getToken();
  }

  getToken(): void {
    let userLoggedIn = this.userSvc.getLoggedInUser();
    if (userLoggedIn !== null) {
      this.userIsLoggedIn = true;
      this.currentUser = userLoggedIn;

    }
    this.userSvc.UserStateChanged.subscribe((userLoggedInMsg) => {
      this.userIsLoggedIn = userLoggedInMsg;
      this.currentUser = userLoggedIn;
    });
  }


  logoutUser() {
    this.userSvc.SetUserAsLoggedOff();
    this.userIsLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
