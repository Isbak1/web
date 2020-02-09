import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-window-more',
  templateUrl: './window-more.component.html',
  styleUrls: ['./window-more.component.scss']
})
export class WindowMoreComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  signOut(){
    this.userService.removeCurrent();
    this.router.navigate(['/login']);
  }
}
