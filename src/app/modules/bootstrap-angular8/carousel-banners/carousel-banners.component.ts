import { Component, OnInit, Input } from '@angular/core';

export interface BannersInfo {
  src: string;
  alt?: string;
  title?: string;
  subtitle?: string;
  duration?: number;
}

@Component({
  selector: 'app-carousel-banners',
  templateUrl: './carousel-banners.component.html',
  styleUrls: ['./carousel-banners.component.scss']
})
export class CarouselBannersComponent implements OnInit {
  @Input() bannerInfos: BannersInfo[];

  constructor() { }

  ngOnInit() {
  }

}
