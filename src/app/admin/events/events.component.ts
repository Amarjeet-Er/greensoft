import { Component, OnInit } from '@angular/core';
import SwiperCore, { Navigation } from 'swiper';
SwiperCore.use([Navigation ]);

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
