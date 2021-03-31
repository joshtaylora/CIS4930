import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{

  constructor(private userSvc: UserService, private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean {
    let userInfo = this.userSvc.GetLoggedInUser();
    console.log(userInfo);
    if(userInfo===null)
    {
      this.router.navigate(['/login']);
      return false;
    }
    else
      return true;
  }
}
