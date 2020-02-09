import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user/user.service';
import { User } from 'src/classes/user';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  selected = 'signin' ;
  user: User;
  username = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  pass_confirm = new FormControl('', [Validators.required]);
  test: any;
  hide = true;
  hideC = true;

  constructor(private _router: Router, private _userService: UserService) { }

  ngOnInit() {
  }

  select(selected){
    if (selected == 'signin'){
      this.selected = 'signin' ;
      this.username.reset();
      this.password.reset();
    }
    if (selected == 'signup'){
      this.selected = 'signup' ;
      this.username.reset();
      this.password.reset();
    }
  }

  onLogin(){
    if(this.username && this.password.value){
      this._userService.getUser(this.username.value, this.password.value)
          .subscribe(data => {
            this.test = data;
            console.log(this.test);
            if(this.test.length == 1){
              this._userService.putCurrent(data[0]);
              // localStorage.setItem('isConnect', 'true');
              this._router.navigate(['/home']);
            } else if(this.test.length > 1){
              this._router.navigate(['/confirm']);
            }
            // if(this.test.length == 1){
            //   this._router.navigate(['/home']);
            // }else if(this.test.length > 1){
            //   this._router.navigate(['/reset']);
            // }
          }, err =>{
            if(err.error === "user not found"){
              this.username.setErrors({'incorrect': true});
            }
            if(err.error === "password incorrect"){
              this.password.setErrors({'incorrect': true});
            }
        }
      );
    }
    else{
      console.log("error")
    }
  }

  onRegister() {
    let user = {
      '_id': '',
      'username': '',
      'email':'',
      'password':'',
      'secteur':''
    };
    // user._id = "default";
    user.username = this.username.value;
    user.email = this.email.value;
    user.password = this.password.value;
    user.secteur = "Default";
    console.log(user);
    this._userService.addUser(user)
        .subscribe(data => {
          console.log(data);
          this.selected = 'signin';
        }, err => {
          console.log(err);
          this.email.setErrors({'exist': true});
        });
  }

  getErrorMessage(){
    let emailError = this.email.hasError('required') ? 'Please enter your password' :
    this.email.hasError('email') ? 'Not a valid email':
    this.email.hasError('exist') ? 'That email already exist, please put another':
    '';
    
    let passError = this.password.hasError('required') ? 'You must enter a value':
    // !this.password.hasError('minLength') ? 'Password must be least at 6 characters':
    this.password.hasError('incorrect') ? 'Incorrect Password':
    '';
    if (this.pass_confirm.value !== this.password.value){
      this.pass_confirm.setErrors({'equal':true});
    }

    let passConfirmError = this.pass_confirm.hasError('required') ? 'You must enter a value':
    // this.pass_confirm.hasError('minLength') ? 'Password must be least at 6 characters':
    this.pass_confirm.hasError('equal') ? 'The passwords have to be the same !':
    '';

    let usernameError = this.username.hasError('required') ? 'Please enter your username':
    this.username.hasError('incorrect') ? 'Username not found':
    '';
    return {emailError,passError, passConfirmError, usernameError};
  }

  formOpen() {
      document.getElementById("mb-login-card").style.display = "block";
  }

   formClose() {
        document.getElementById("mb-login-card").style.display = "none";
    }
  
}
