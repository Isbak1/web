import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-product-space',
  templateUrl: './top-product-space.component.html',
  styleUrls: ['./top-product-space.component.scss']
})
export class TopProductSpaceComponent implements OnInit {

  selected = 'signin' ;
    username: string = '';
    password: string = '';

    constructor() { }

      ngOnInit() {
      }

    select(selected){
      if (selected == 'signin'){
        this.selected = 'signin' ;
      }
      if (selected == 'signup'){
        this.selected = 'signup' ;
      }
    }

    onLogin(){
      if(this.username == 'admin' && this.password == 'admin'){

      }
      else{

      }
    }


}
