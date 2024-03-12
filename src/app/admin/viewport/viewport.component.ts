import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { A11y, Navigation,Autoplay, Pagination, Scrollbar } from 'swiper';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { timeInterval } from 'rxjs';
// install Swiper modules
SwiperCore.use([Navigation,Autoplay]);


@Component({
  selector: 'app-viewport',
  templateUrl: './viewport.component.html',
  styleUrls: ['./viewport.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class ViewportComponent implements OnInit {
  projectcount: number = 0;
  projectdeal: number = 0;
  traineecount: number = 0;
  projectcountstop: any = setInterval(() => {
    this.projectcount++;
    if (this.projectcount == 500) {
      clearInterval(this.projectcountstop);
    }
  },80)

  projectdealstop: any = setInterval(() => {
    
    this.projectdeal++;
    if (this.projectdeal == 100) {
      clearInterval(this.projectdealstop);
    }
  }, 100)


  traineecountstop: any = setInterval(() => {
    this.traineecount++;
    if (this.traineecount == 5000 ) 
    {
      clearInterval(this.traineecountstop);
      
    }
  },)



  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faYoutube = faYoutube;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  swiperConfig: any
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
          slidesPerView: 4,
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