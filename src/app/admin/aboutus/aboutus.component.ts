import { Component, OnInit, ViewEncapsulation, } from '@angular/core';
import { auto } from '@popperjs/core';
import SwiperCore, { A11y,Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation,Autoplay, Pagination, Scrollbar, A11y]);
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AboutusComponent implements OnInit {
  swiperConfig: any;
  constructor() { }

  ngOnInit(): void {
    this.swiperConfig = {
      slidesPerView: 1,
      spaceBetween: 0,
      breakpoints: {
        600: {
          spaceBetween: 0,
          slidesPerView: 2,
          allowTouchMove: true,

        },
        768: {
          spaceBetween: 0,
          slidesPerView: 2,
          allowTouchMove: true,
        },
        800: {
          spaceBetween: 0,
          slidesPerView: 3,
          allowTouchMove: true,
        },
        992: {
          spaceBetween: 0,
          slidesPerView: 3,
          allowTouchMove: true,
        },
        1200: {
          spaceBetween: 0,
          slidesPerView: 4,
          allowTouchMove: true,
        }
      }
    }
  }



}

