import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-step2',
  templateUrl: './login-step2.component.html',
  styleUrls: ['./login-step2.component.scss']
})
export class LoginStep2Component implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }


  onLogin(){
    if(this.email.value && this.password.value){
      this.userService.getUserByConfirm(this.email.value, this.password.value)
          .subscribe(user => {
            console.log(user);
            this.userService.putCurrent(user);
            // localStorage.setItem('isConnect', 'true');
            this.router.navigate(['/home']);
          }, err => {
            console.log(err);
            if(err.error === "password incorrect"){
              this.password.setErrors({'incorrect':true});
            }else if(err.error === "user not found"){
              this.email.setErrors({'incorrect':true});
            }
          })
    }
  }

  getErrorMessage(){
    let emailError = this.email.hasError('required') ? 'Please enter your email adress':
                      this.email.hasError('email') ? 'Not a valid email':
                      this.email.hasError('incorrect') ? 'This account does not exist':
                      '';
    
    let passError = this.password.hasError('required') ? 'Please enter your password':
                    this.password.hasError('incorrect') ? 'Incorrect password':
                    '';
    
    return {emailError, passError};
  }

}
