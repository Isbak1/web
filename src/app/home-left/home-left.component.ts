import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { User } from 'src/classes/user';

@Component({
  selector: 'app-home-left',
  templateUrl: './home-left.component.html',
  styleUrls: ['./home-left.component.scss']
})
export class HomeLeftComponent implements OnInit {

  currentUser: User;
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.currentUser = this.userService.getCurrent();
    console.log(this.currentUser);
  }

}
