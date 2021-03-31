import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{

  constructor(private userSvc: UserService, private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean {
    let logInStatus = localStorage.getItem('userIsLoggedIn');
    let userLoggedIn:boolean;
    if (logInStatus !=null)
    {
      userLoggedIn = JSON.parse(logInStatus);
    } else {
      userLoggedIn = false;
    }

    if (!userLoggedIn)
    {
      this.router.navigate(['/login']);
    }

    return userLoggedIn;
  }
}
