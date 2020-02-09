import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  email: string = "";
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }


  sendEmail(){
    console.log(this.email);
    this.userService.resetPassword(this.email)
        .subscribe(user => {
          if(user){
            alert("a msg was send to " + user.username +" à l'adresse " + user.email);
          }else{
            alert("a msg was send to ");
          }
          
        }, err => {
          console.log(err);
        });
  }


  onLogin(){
    this.userService.getUserByEmail(this.email)
        .subscribe(user => {
          // console.log(user);
          this.userService.putCurrent(user);
          this.router.navigate(['/home']);
        }, (err) => {
          console.log(err);
          this.router.navigate(['/login']);
        })
  }

}
