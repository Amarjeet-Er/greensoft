import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  scrollerbtn: string = 'btn';
  singh: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  onclick() {
    window.scroll(0, 0);
  }
  @HostListener('window:scroll', ['$event']) onscroll() {
    if (window.scrollY > 40) {
      this.singh = true;
    }
    else {
      this.singh = false;
    }
  }
}

