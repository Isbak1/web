import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private userService: UserService) { }

  canActivate(){
    // if(this.userService.getCurrent() || localStorage.getItem('isConnect')){
    if(this.userService.getCurrent()){
      return true;
    }
    
    this.router.navigate(['/login']);
    return false;
  }

}
