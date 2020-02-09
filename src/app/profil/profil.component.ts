import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { User } from 'src/classes/user';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  currentUser: User;
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.currentUser = this.userService.getCurrent();
  }

}


