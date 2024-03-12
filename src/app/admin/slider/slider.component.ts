import { Component, OnInit, HostListener, ViewEncapsulation } from '@angular/core';
import SwiperCore, {Navigation,Autoplay,Pagination} from 'swiper';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { EnquiryComponent } from '../enquiry/enquiry.component';
import { Router } from '@angular/router';
// install Swiper modules
SwiperCore.use([Navigation,Autoplay,Pagination]);
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class SliderComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  sahil: boolean = true;
  navbarfixed: boolean = false;
  menuvariable:boolean = false;
  nabbarvariable:boolean = false;
  innerWidth: any;
  constructor(
    private openEnquiry: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 768) {
      this.menuvariable = false
    }
  }
  @HostListener('window:scroll', ['$event']) onscroll() {
    if (window.scrollY > 40) {
      this.navbarfixed = true;
      this.menuvariable = false;
      this.nabbarvariable = false;
    }
    else {
      this.navbarfixed = false;
    }
  }
  openmenu(){
    this.menuvariable = !this.menuvariable;
    this.nabbarvariable = !this.nabbarvariable;
  }
  openenquiry() {
    this.openEnquiry.open(EnquiryComponent, {
      disableClose: true,
    })

  }

  closemenu1() {
    window.scroll(0,0);
    this.router.navigate(['/home'])
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 768) {
      this.menuvariable = false;
      this.nabbarvariable = false;
    }
  }
  closemenu2() {
    window.scroll(0,800);
    this.router.navigate(['/about'])
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 768) {
      window.scroll(0,0);
      this.menuvariable = false;
      this.nabbarvariable = false;
    }
  }

  closemenu3() {
    window.scroll(0,800);
    this.router.navigate(['/services'])
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 768) {
      window.scroll(0,0);
      this.menuvariable = false;
      this.nabbarvariable = false;
    }
  }

  closemenu4() {
    window.scroll(0,800);
    this.router.navigate(['/training'])
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 768) {
      window.scroll(0,0);
      this.menuvariable = false;
      this.nabbarvariable = false;
    }
  }

  closemenu5() {
    window.scroll(0,800);
    this.router.navigate(['/contact'])
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 768) {
      window.scroll(0,0);
      this.menuvariable = false;
      this.nabbarvariable = false;
    }
  }
 
}
