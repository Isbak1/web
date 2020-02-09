import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-ten-products',
  templateUrl: './top-ten-products.component.html',
  styleUrls: ['./top-ten-products.component.scss']
})
export class TopTenProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    customOptions: any = {
        loop: true,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        dots: false,
        navSpeed: 700,
        navText: ['<img src="../../assets/imgs/icons/left-black.png">', '<img src="../../assets/imgs/icons/right-black.png">'],
        responsive: {
          0: {
            items: 1
          },
          400: {
            items: 2
          },
          740: {
            items: 3
          },
          940: {
            items: 4
          }
        },
        nav: true
      }
}

